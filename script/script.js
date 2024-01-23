







// Задача1: Изменение текста элемента
// Условие: Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!". С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!".

const elem = document.querySelector("p");
//console.log(elem.innerText);
elem.innerText = "Привет JavaScript";

// Задача2: Добавление нового элемента в DOM
// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив и создает нумерованный список из этих строк в html документе.
const array =["List","ArrayList","LinkedList","Vector","Stack"];
function numlist(collection){
    const root =document.querySelector('#root');
    const ol =document.createElement('ol');
    collection.forEach((item) =>{
        const li = document.createElement('li');
        li.textContent=item;
        ol.appendChild(li);
        
    });
    root.appendChild(ol);
}
numlist(array);
// Задача: Создание ссылок
// Условие: Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.
const tasks=[
    { label: "Заголовок 1", link: 1 },
    { label: "Заголовок 2", link: 2 },
    { label: "Заголовок 3", link: 3 },
    { label: "Заголовок 4", link: 4 },
    { label: "Заголовок 5", link: 5 }
  ]
  function linked(tasks){
    const root =document.querySelector('#root');
    tasks.forEach(({label,link})=>{
        const a = document.createElement('a');
        a.textContent=" "+label;
        a.href='#'+link;
        root.appendChild(a);
    });
    
    //tasks
    //.forEach(({label,link}) => root.append(linked(label,link)));
  }
  linked(tasks);