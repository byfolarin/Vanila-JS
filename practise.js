function getBooks() {
    console.log('Fetching books...');
    fetch('books.json')
        .then(response => {
            console.log('Response received:', response);
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

// Call the function when the page loads
window.addEventListener('load', getBooks);