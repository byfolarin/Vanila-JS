// const data = { name: 'John Doe', email: 'john@example.com' };

// fetch('https://api.example.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch(error => {
//   console.error('Error:', error);
// });



// The Fetch API is a modern, powerful way to make HTTP requests from JavaScript. It provides a more intuitive and flexible alternative to the older XMLHttpRequest API. Here's a quick overview of how to use the Fetch API:

// 1. **Making a basic fetch request**:
//    ```javascript
//    fetch('https://api.example.com/data')
//      .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => console.error(error));
//    ```
//    The `fetch()` function takes a URL as its argument and returns a Promise that resolves to the Response object. You can then call methods like `json()` on the Response to parse the response body.

// 2. **Handling request options**:
//    You can pass an optional options object as the second argument to `fetch()` to customize the request:
//    ```javascript
//    fetch('https://api.example.com/data', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify({ name: 'John Doe', email: 'john@example.com' })
//    })
//      .then(response => response.json())
//      .then(data => console.log(data))
//      .catch(error => console.error(error));
//    ```
//    In this example, we're making a POST request with a JSON payload in the request body.

// 3. **Error handling**:
//    The Fetch API uses Promises, so you can handle errors using the `.catch()` block. If the server responds with an error status code (e.g., 4xx or 5xx), the Promise will still resolve, but you can check the `response.ok` property to determine if the request was successful.
//    ```javascript
//    fetch('https://api.example.com/non-existent-endpoint')
//      .then(response => {
//        if (!response.ok) {
//          throw new Error(`HTTP error ${response.status}`);
//        }
//        return response.json();
//      })
//      .then(data => console.log(data))
//      .catch(error => console.error(error));
//    ```

// 4. **Handling JSON, text, and other response types**:
//    The Fetch API provides several methods to parse the response body, such as `json()`, `text()`, `blob()`, and `formData()`. Choose the appropriate method based on the expected response format.

// That covers the basics of using the Fetch API in JavaScript. Let me know if you have any other questions!


fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));



function fetchUserData() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userHtml = `
                <img src="${user.picture.large}" alt="User Avatar">
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
            `;
            document.getElementById('userData').innerHTML = userHtml;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            document.getElementById('userData').innerHTML = '<p>Error loading user data.</p>';
        });
}

// Call the function when the page loads
fetchUserData();