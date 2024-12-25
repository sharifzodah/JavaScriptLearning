const fs = require('fs');
const csv = require('jquery-csv');

// Read the CSV file with callbacks
function readCSVFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(new Error("Failed to read the file."), null);
        }
        const parsedData = csv.toObjects(data); // Parse the CSV data
        callback(null, parsedData);
    });
}

// Find customer name by ID with a callback
function findCustomerNameById(data, customerId, callback) {
    const customer = data.find(row => row['Customer Id'] === customerId); // Find customer by ID
    callback(null, customer ? customer['Short Name'] : null);
}

// Process the file and retrieve customer name using nested callbacks
function processFile(filePath, customerId, callback) {
    readCSVFile(filePath, (err, parsedData) => {
        if (err) {
            console.error("Error reading CSV file:", err);
            return callback(err, null);
        }
        findCustomerNameById(parsedData, customerId, (err, customerName) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, customerName);
        });
    });
}

// Example usage
const filePath = 'temp/Customer-list.csv'; // Path to your CSV file
const customerId = '387'; // Example Customer ID

// Invoke processFile and log the result
processFile(filePath, customerId, (err, customerName) => {
    if (err) {
        console.error("Failed to retrieve customer name:", err);
    } else {
        console.log(customerName); // Log the customer name
    }
});
