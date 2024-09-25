function getBooks() {
    fetch('books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let allTitlesHTML = '';
            data.books.forEach(book => {
                allTitlesHTML += `<p>${book.title}</p>`;
            });
            const bookListElement = document.getElementById('bookList');
            bookListElement.innerHTML = allTitlesHTML;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

window.addEventListener('load', getBooks );


function getAuthors (){
    fetch('books.json')
        .then(response=>response.json())
        .then(data =>{
            let allAuthors = data.books.map(book => book.author);
            return allAuthors;
        })
    
}

getAuthors().then(authors => {
    console.log("Authors:", authors);
});