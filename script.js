//your JS code here. If required.
function secondHighest(arr) {
    // If array has fewer than 2 elements, return -Infinity
    if (arr.length < 2) return -Infinity;

    // Initialize first and second highest as -Infinity
    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            // Update second before first
            second = first;
            first = num;
        } else if (num > second && num < first) {
            // Update second if it's between first and second
            second = num;
        }
    }

    // If second-highest is still -Infinity, it means all elements are the same
    return second === -Infinity ? -Infinity : second;
}
