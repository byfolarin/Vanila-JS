
function getBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.id)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

console.log(getBooks)