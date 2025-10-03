const myLibrary=[];
const newBookDialog = document.querySelector("dialog");
const addBookBtn = document.querySelector("#addBookBtn");


function Book(title,author,pages,isRead){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title,author,pages,isRead) {
    let newBook = new Book(title,author,pages,isRead);
    myLibrary.push(newBook);
}

let book1 = new Book("My book","John",233,1);
let book2 = new Book("Second Book","Andrei",313,0);

myLibrary.push(book1);
myLibrary.push(book2);

function renderBooks(){
    const bookList = document.querySelector(".book-list");
    bookList.textContent = "";
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        const title = document.createElement("div");
        title.textContent = book.title;
        card.appendChild(title);

        const author = document.createElement("div");
        author.textContent = book.author;
        card.appendChild(author);

        const pageNo = document.createElement("div");
        pageNo.textContent = book.pages;
        card.appendChild(pageNo);

        const isRead = document.createElement("div");
        isRead.textContent = book.isRead ? "Has been read" : "Not Read";
        card.appendChild(isRead);


        bookList.appendChild(card);
    });
}


renderBooks();

addBookBtn.addEventListener("click",()=> {
    newBookDialog.showModal();
});
