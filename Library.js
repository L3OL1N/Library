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
function showForm() {
    formDiv.style.display = "block";
}
function sumit(){
    let text = form.elements.title.value;
    if(text === "") {
        alert("Book need title");
        return false;
    }
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
// dekete
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
    if(e.target.matches("button[data-item]")){
        let found = myLibrary.find(Element => Element.title === e.target.dataset.item);
        if(found === undefined) return ;
        let index = myLibrary.indexOf(found);
        myLibrary.splice(index,1);
        console.dir(myLibrary);
    }
    showLibrary();
}
// is book read ?
function readBook(e){
    if(e.target.matches(".read")){
        let found = myLibrary.find(Element => Element.title === e.target.dataset.title);
        if(found === undefined) return ;
        let index = myLibrary.indexOf(found);
        myLibrary[index].read === "ture" ? 
            Object.defineProperty(myLibrary[index],"read",{value:"false"}) : Object.defineProperty(myLibrary[index],"read",{value:"ture"});
        console.log(myLibrary[index].read);
        showLibrary();
    }
}
//add book info
function showLibrary(){
    let times = (libraryDiv.offsetWidth - 20) / 5.5 ;
    let readStatus = "Unread";
    libraryDiv.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].read === "ture") readStatus = "Read";
        if(myLibrary[i].read === "false") readStatus = "Unread";
        libraryDiv.innerHTML += `${myLibrary[i].title} --- > author : ${myLibrary[i].author} / pages : ${myLibrary[i].pages}
        <button class="read" data-title= "${myLibrary[i].title}" data-read="${myLibrary[i].read}">${readStatus}</button>
        <button data-item=${myLibrary[i].title}>delete</button>
        <br>${"-".repeat(times)}<br>`;
    }
}

addBtn.addEventListener("click",showForm);
deleteBtn.addEventListener("click",deleteBookToLibrary);

sumitBtn.addEventListener("click",sumit);
// book btn
libraryDiv.addEventListener("click",deleteBook);
libraryDiv.addEventListener("click",readBook);