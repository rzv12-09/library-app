const myLibrary=[];

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
