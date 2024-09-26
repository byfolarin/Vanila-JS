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
                console.log('Received data:', data); 
                const ratings = data.rating || data.ratings; 
                if (Array.isArray(ratings)) {
                    ratings.forEach(rate => console.log(rate));
                } else {
                    console.log('Ratings not found or not an array:', ratings);
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    
    getRating();