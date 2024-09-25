
function getBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Log all book titles
            data.books.forEach(book => {
                const bookTitle = book
                
            });
              const bookTitles = `<p>${bookTitle}</p>`
            document.getElementById('bookTitle').innerHTML=bookTitles
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the function
getBooks();