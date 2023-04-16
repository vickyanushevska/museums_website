function year(){ //dialogue with the user
    let answer = prompt("What year is it?", "");
    if (answer == 2023){
        alert(`Your answer ${answer} is correct. Page view is allowed.`)
    }
    else{
        alert(`Your answer is not correct. Page view is not alowed.`)
    }
} 

function showDeveloper(name, surname, position = "student of KPI"){ //show developer
    alert (name + " " + surname + ": " + position);
}

function comparing(){ //comparing of strings
    let str1 = "Hello, my name is Viktoriia";
    let str2 = "Hello, my surname is Yanushevska";
    if (str1 > str2){
        alert (`String "${str1}" is longer.`)
    }
    else if (str1 < str2){
        alert (`String "${str2}" is longer.`)
    }
    else {
        alert ("My surname and name are equal.")
    }
}

function changeColor(){ //change background
    document.body.style.backgroundColor = 'SeaShell'; // зробити фон іншого кольору
    setTimeout(() => document.body.style.background = '', 3000); // повернути назад
}

function anotherSite(){ //url 
    alert(location.href); // показывает текущий URL
      if (confirm("Are you interested in top-museums of the world?")) {
        location.href = "https://www.timeout.com/arts-and-culture/best-museums-and-galleries-in-the-world"; // перенаправляет браузер на другой URL
      }
}

// Використати метод getElementById (зміна першого блоку на сторінці butterflies)
function changeColorList(newColor){ //change background of element with id
    let elem = document.getElementById('content_butterflies');// сделать его фон красным
    elem.style.backgroundColor = newColor;
}
 
// // Використати метод querySelectorAlіl
// function querySelectorAlіl(){
//      let elements = document.querySelectorAll('.museumslist');
//          for (let elem of elements) {
//          alert(elem.innerHTML); // 
//     }
// }


//innerHTML
function changeInformation(){
    alert( document.body.innerHTML ); // читаем текущее содержимое
    document.body.innerHTML = 'Новий BODY!'; // заменяем содержимое
}

// Внести зміни в документи/сторінку, використовуючи document.write, document.createElement(tag), document.createTextNode(text) 
function addTextNode(text) {
    const newtext = document.createTextNode(text);
    const feedback = document.getElementById("feedback");

    feedback.appendChild(newtext);
}


document.body.onload = addElement;

function addElement(){ //add div
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Do you want to return?");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("return");
    document.body.insertBefore(newDiv, currentDiv);
}


function Nodes(){ //in the end of page
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<p>Information desk: +380683637023</p>";
    document.body.append(div);
}

// function Nodes2(){ //start of the page
//     let div = document.createElement('div');
//     div.className = "alert";
//     div.innerHTML = "<p>Довідкове бюро: +380683637023</p>";
//     document.body.prepend(div);
// }

// методи вставки node.append (... nodes or strings), node.prepend (... nodes or strings), node.after (... nodes or strings), 
// node.replaceWith (... nodes or strings), метод видалення вузлів  node.remove ().

function Nodes3(){
    let container = document.createElement("div");
    let p = document.createElement("p");
    container.appendChild(p);

    p.before("Text");
    console.log(container.outerHTML);
}

function Removing(){
    const element = document.getElementById("div-02");
    element.remove(); // Removes the div with the id
}

function Replacing(){
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.appendChild(p);
    const span = document.createElement("span");

    p.replaceWith(span);

    console.log(div.outerHTML);
}

// LABORATORNA №7

//1)Використати одну з подій миші. Написати фукцію-обробник. Призначити функцію-обробник події через атрибут і через властивість. 

// 2)Використати метод addEventListener, приначити одній події різні обробники (написати функції-обробники).

// 3)Призначити обробником події об’єкт за допомогою addEventListener, застосувати метод handleEvent, вивести елемент, 
// на якому спрацював обробник, використовуючи event.currentTarget. Видалити об’єкт, використовуючи removeEventListener

// 4)Створити списк або використати існуючий. Реалізувати підсвічування елементів списку при кліку миші. Використовавати event.target. Обробник 
// onclickзастоувати для списку, а не для кожного елементу.Створити меню (кілька кнопок), додати одни обробник для всього меню 
// і атрибути data-* для кожної кнопки, в відповідності з методами, які вони викликають. Застосувати прийом проектування «Поведінка» 
// (додавання елементам поведінки behavior за допомогою атрибута data-*.

    function ColorListHistory() { //attribute
    let elem = document.getElementById("listhistory");
    elem.style.backgroundColor = 'SeaShell';
    setTimeout(() => elem.style.backgroundColor = '', 10000);
    }

    function Sorting(){ // властивість, сортування таблиці для фідбеку
    grid.onclick = function(e) {
      if (e.target.tagName != 'TH') return;

      let th = e.target;
      // якщо клітинка TH, тоді сортувати
      // cellIndex -- це номер клітинки th:
      // 0 для першого стовпця
      // 1 для другого і т.д.
      sortGrid(th.cellIndex, th.dataset.type);
    };

    function sortGrid(colNum, type) {
      let tbody = grid.querySelector('tbody');

      let rowsArray = Array.from(tbody.rows);

      // compare(a, b) порівнює два рядки, необхідно для сортування
      let compare;

      switch (type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
          };
          break;
        case 'string':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
          };
          break;
      }

      // сортування
      rowsArray.sort(compare);

      tbody.append(...rowsArray);
      }
    }

