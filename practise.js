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


function getAuthors() {
    return fetch('books.json')
        .then(response => response.json())
        .then(data => {
            let allAuthors = data.books.map(book => book.author);
            console.log(allAuthors); // This logs all authors to the console
            return allAuthors; // This returns the array of authors
        })
        .catch(error => {
            console.error('Error:', error);
            throw error; // Re-throw the error to be handled by the caller
        });
}

// Usage:
getAuthors()
    .then(authors => {
        console.log("Authors:", authors);
        // You can use the authors array here
        const authorList = document.getElementById('authorList');
        authorList.innerHTML = authors.map(author => `<p>${author}</p>`).join('');
    })
    .catch(error => {
        console.error("Error fetching authors:", error);
    });

    const getRating = () => {
        fetch('books.json')
            .then(response => response.json())
            .then(data => {
                if (data && data.books && Array.isArray(data.books)) {
                    // Find the book with the highest rating
                    const highestRatedBook = data.books.reduce((highest, current) => 
                        current.rating > highest.rating ? current : highest
                    );
    
                    // Log the title and rating of the highest-rated book
                    console.log(`Highest rated book: "${highestRatedBook.title}" with a rating of ${highestRatedBook.rating}`);
    
                    // Optionally, display this information in the HTML
                    const ratingList = document.getElementById('ratingList');
                    ratingList.innerHTML = `<p>Highest rated book: "${highestRatedBook.title}" with a rating of ${highestRatedBook.rating}</p>`;
                } else {
                    console.log('Data structure is not as expected:', data);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    
    getRating();



    function getGenre(genre){
        fetch('books.json')
        .then(response => response.json())
        .then(data => {
            let booktype = genre
            let allGenre = data.genre
        })
    }