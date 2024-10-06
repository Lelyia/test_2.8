let redText = document.querySelector("h1").innerHTML = "Измененный заголовок"; //Изменение заголовка

var tag, element, number = 1, // Создание нумерации
    txt;
element = document.querySelectorAll("li");

for (var i = 0; element.length > i; i++) {
    tag = document.createElement("small");
    txt = document.createTextNode(number + ") ");
    tag.appendChild(txt);
    element[i].appendChild(tag);
    element[i].insertBefore(tag, element[i].firstChild);
    number++;
};

const images = document.querySelector("img"); // Смена изображения
images.setAttribute("src", "img/cat.jpg");

const links = document.querySelector("a"); // Смена ссылки
links.setAttribute("href", "https://yandex.ru");
links.innerHTML = "Новая ссылка";

document.querySelector("#add-item").addEventListener("click",
    () => { // Добавление элемента при нажатии на кнопку
        const newListItem = document.createElement("li");
        newListItem.textContent = "Новый элемент";
        document.querySelector("ul").appendChild(newListItem);
    });

document.querySelector("#remove-item").addEventListener("click", // удаление последнего элемента из списка
    () => {
    var list = document.querySelector("ul");
    var listItems = list.getElementsByTagName("li");
    var last = listItems[listItems.length - 1];
    list.removeChild(last);
});

let text = document.querySelector(".text__about"); //Изменение текста
text.style.color = "blue";

document.querySelector("#change-color").addEventListener("click", // смена цвета абзаца
() => {
    text.style.color = "orange";
});

document.querySelector("#toggle-paragraph").addEventListener("click", // удаление и добавление абзаца
() => {        
    text.classList.toggle("display");
});

// измерение размеров
let figure =  document.getElementById("box").getBoundingClientRect();
console.log(figure);
console.log("Ширина: " + figure.width + "px");
console.log("Высота: " + figure.height + "px");