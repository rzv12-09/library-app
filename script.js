const myLibrary=[];
const newBookDialog = document.querySelector("dialog");
const addBookBtn = document.querySelector("#addBookBtn");
const confirmBtn = document.getElementById("confirmBtn");
const form = document.querySelector("form");
const cancelBtn = document.getElementById("cancelBtn");


function Book(title,author,pages,isRead){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.toogleIsRead = function(){
    if(this.isRead == 0){
        this.isRead = 1; 
    }
    else{
        this.isRead = 0;
    }
}

function addBookToLibrary(title,author,pages,isRead) {
    let newBook = new Book(title,author,pages,isRead);
    myLibrary.push(newBook);
}

let book1 = new Book("Sample Book 1","Someone",233,1);
let book2 = new Book("Samble Book 2","Someone",126,0);

myLibrary.push(book1);
myLibrary.push(book2);

function removeFromLibrary(id){
    myLibrary.forEach((book,index) => {
        if(book.id == id){
            myLibrary.splice(index,1);
        }
    });
}

function renderBooks(){
    const bookList = document.querySelector(".book-list");
    bookList.textContent = "";
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        const title = document.createElement("div");
        title.textContent = '"' + book.title + '"';
        card.appendChild(title);

        const author = document.createElement("div");
        author.textContent = "by " + book.author;
        card.appendChild(author);

        const pageNo = document.createElement("div");
        pageNo.textContent = book.pages + " pages";
        card.appendChild(pageNo);

        const isRead = document.createElement("button");
        isRead.id = "isReadBtn";
        isRead.textContent = book.isRead ? "Has been read" : "Not Read";
        isRead.addEventListener("click",(event)=>{
            book.toogleIsRead();
            renderBooks();
        })
        if(book.isRead == 1){
            isRead.classList.add("read");
        }
        else{
            isRead.classList.add("not-read");
        }
        card.appendChild(isRead);

        const deleteBtn = document.createElement("button");
        deleteBtn.dataset.id = book.id;
        deleteBtn.textContent = "Delete";
        deleteBtn.id = "deleteBtn";
        deleteBtn.addEventListener("click",()=>{
            removeFromLibrary(deleteBtn.dataset.id);
            renderBooks();
        })
        card.appendChild(deleteBtn);
        card.classList.add("card");

        bookList.appendChild(card);
    });
}


renderBooks();

addBookBtn.addEventListener("click",()=> {
    newBookDialog.showModal();
});

confirmBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const isRead = document.getElementById("isRead");
    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }
    addBookToLibrary(title.value,author.value,pages.value,isRead.checked);
    form.reset();
    newBookDialog.close();
});

newBookDialog.addEventListener("close",()=>{
    renderBooks();
})

cancelBtn.addEventListener("click",()=>{
    form.reset();
})