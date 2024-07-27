/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Fetch API & JSON
 *     @licence BSD 3-Clause License
 */

// URL of the JSON data
const url = 'https://productweb-backend.onrender.com/api/v1/users/create';

// Use fetch() to get the data
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "firstname": "Alejandro",
    "lastname": "Triana",
    "email": "alejo8591@gmail.com",
    "phone": "3493849343",
    "password": "dslgk;qd;jgldffd"
  })
})
  .then(response => {
    // Check if the request was successful
    if (response) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    // Use the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle the error
    console.error('There has been a problem with your fetch operation:', error);
  });
