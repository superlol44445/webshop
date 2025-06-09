async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data'); // Replace with your API URL
        let data = await response.json(); // Convert response to JSON

        console.log(data); // Logs the result
        return data; // Stores the result in a variable
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

let apiResult = fetchData(); // Variable storing API data
