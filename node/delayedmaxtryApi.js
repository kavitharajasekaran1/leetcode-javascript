/**
 * Simulates a network request that has a chance of failing.
 * @returns {Promise<string>} A promise that resolves with a success message or rejects with an error.
 */
function mockApiCall() {
    console.log("Attempting to call the API...");
    return new Promise((resolve, reject) => {
        // Simulate a 70% chance of failure to demonstrate the retry logic
        if (Math.random() > 0.7) {
            console.log("✅ API call successful!");
            resolve("Success: Here is your data!");
        } else {
            console.log("❌ API call failed.");
            reject(new Error("Network error: Could not connect to the server."));
        }
    });
}

/**
 * Tries to execute a promise-based function up to a specified number of times
 * with a delay between each attempt.
 *
 * @param {Function} apiFunction The promise-returning function to try.
 * @param {number} maxRetries The maximum number of attempts.
 * @param {number} delay The delay in milliseconds between retries.
 * @returns {Promise<any>} A promise that resolves with the result of the successful call
 *                         or rejects if all retries fail.
 */
async function retryApiCall(apiFunction, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`\n--- Attempt ${attempt} of ${maxRetries} ---`);
            // Await the result of the API call
            const result = await apiFunction();
            // If the call is successful, return the result and exit the function
            return result;
        } catch (error) {
            console.error(`Attempt ${attempt} failed: ${error.message}`);
            // If this was the last attempt, throw an error to signal final failure
            if (attempt === maxRetries) {
                console.error("All retry attempts have failed.");
                throw new Error(`API call failed after ${maxRetries} attempts.`);
            }
            // Wait for the specified delay before the next attempt
            console.log(`Waiting ${delay / 1000} second(s) before retrying...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// --- Main execution ---
async function main() {
    try {
        const response = await retryApiCall(mockApiCall, 3, 1000);
        console.log("\n🎉 Final Result:", response);
    } catch (error) {
        console.error("\n🔥 Final Error:", error.message);
    }
}

// Run the main function to see the result
main();
