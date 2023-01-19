// Exercise on class
// Constructor must take book list as an argument
// getBook()
// issueBook(bookName, user)
// returnBook(bookName) 

class Library{
    constructor (bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user){
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] = user;
        }
        else{
            console.error("This book is already issued")
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}




