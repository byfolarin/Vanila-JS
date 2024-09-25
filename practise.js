function getBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            let allTitlesHTML = '';
            data.books.forEach(book => {
                console.log(book.title);
                allTitlesHTML += `<p>${book.title}</p>`;
            });
            document.getElementById('bookList').innerHTML = allTitlesHTML;
        })
        .catch(error => {
            throw new Error('Error:', error);
        });
}