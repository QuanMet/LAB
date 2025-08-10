// 1. Event Loop Example:
console.log('Start');
setTimeout(() => console.log('Timeout'), 0); // Simulating asynchronous operation with 0ms delay
console.log('End');

// Expected output:
// Start
// End
// Timeout

// 2. Callback Function Example:
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000); // Simulating a delay of 2 seconds
}

fetchData((data) => {
    console.log(data);  // Logs "Data received" after 2 seconds
});

// Expected output (after 2 seconds):
// Data received

// 3. Promise Example:
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received"); // Resolving the promise after 2 seconds
        }, 2000);
    });
}

fetchDataPromise().then(data => {
    console.log(data);  // Logs "Data received" after 2 seconds
}).catch(error => {
    console.log(error);
});

// Expected output (after 2 seconds):
// Data received

// 4. Async/Await Example:
async function getData() {
    try {
        const data = await fetchDataPromise();  // Wait for the promise to resolve
        console.log(data);  // Logs "Data received" after 2 seconds
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();

// Expected output (after 2 seconds):
// Data received
