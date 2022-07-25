let myLibrary = [];
const addBtn = document.getElementById("Add");
const deleteBtn = document.getElementById("delete");
const showBtn = document.getElementById("show");
const libraryDiv = document.getElementById("library");
const wrapDiv = document.getElementById("wrap");
const formDiv = document.getElementById("input");
const form = document.forms["input"];
const sumitBtn = document.getElementById("sumit");

// the constructor
function Book() {
    this.title;
    this.author;
    this.pages;
    this.read;
}
// appear form
function creatForm(){
    let newForm = document.createElement("form");
    let textNode = document.createTextNode("test");
    newForm.appendChild(textNode);
    newForm.classList.add("input");
    wrapDiv.appendChild(newForm);
}
function showForm() {
    formDiv.style.display = "block";
}
function sumit(){
    let newBook = new Book;
    newBook.title = form.elements.title.value;
    newBook.author = form.elements.author.value;
    newBook.pages = form.elements.pages.value;
    newBook.read = "false";
    newBook.read = form.elements.read.value;
    myLibrary.push(newBook);
    form.reset();
    formDiv.style.display = "none";
    console.dir(myLibrary);
    showLibrary();
    
}
function deleteBookToLibrary(){
    let deleteTitle = prompt("search title");
    let found = myLibrary.find(Element => Element.title === deleteTitle);
    if(found === undefined) return ;
    let index = myLibrary.indexOf(found);
    myLibrary.splice(index,1);
    showLibrary();
    console.dir(myLibrary);
}
function deleteBook(e){
    if(e.target.matches("button")){
        let found = myLibrary.find(Element => Element.title === e.target.dataset.item);
        if(found === undefined) return ;
        let index = myLibrary.indexOf(found);
        myLibrary.splice(index,1);
        console.dir(myLibrary);
    }
    showLibrary();
}
//add book info
function showLibrary(){
    let times = (libraryDiv.offsetWidth - 20) / 5.5 ;
    libraryDiv.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        libraryDiv.innerHTML += `${myLibrary[i].title} --- > author : ${myLibrary[i].author} / pages : ${myLibrary[i].pages}
        <button class="read">Read</button>
        <button data-item=${myLibrary[i].title}>delete</button>
        <br>${"-".repeat(times)}<br>`;
    }
}
for(let i = 0; i < myLibrary.length; i++){
    let newP = document.createElement("p");
    let newBtn = document.createElement("button");
    let TextNode = document.createTextNode("test");
    newP.appendChild(textNode);
    libraryDiv.appendChild(newP);
}

addBtn.addEventListener("click",showForm);
deleteBtn.addEventListener("click",deleteBookToLibrary);

//showBtn.addEventListener("click",showLibrary);
sumitBtn.addEventListener("click",sumit);

let deleteBtn2 = document.querySelectorAll("[data-item]");

libraryDiv.addEventListener("click",deleteBook);