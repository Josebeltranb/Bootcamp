/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Fetch API & JSON
 *     @licence BSD 3-Clause License
 */

// URL of the JSON data
const url = 'https://productweb-backend.onrender.com/api/v1/users/alejo8591@gmail.com';

// Use fetch() to get the data
fetch(url, {method: 'DELETE'})
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
