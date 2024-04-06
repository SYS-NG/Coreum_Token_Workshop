function fetchAndDisplayBalance() {
    // Make a GET request to the API endpoint
    fetch('http://localhost:3000/api/balance')
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Handle the data from the API
        const denomList = document.getElementById("denom-list");
        denomList.innerHTML = ""; // Clear existing list

        // Iterate over the data and create list items
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `NAME: ${item.denom}    AMOUNT: ${item.amount}`; // Display denomination and amount
            denomList.appendChild(li);
        });
      })
      .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
      });
}

// Call fetchAndDisplayBalance() when the page loads
window.onload = fetchAndDisplayBalance;

// Reload the data every 5 seconds
setInterval(fetchAndDisplayBalance, 5000);