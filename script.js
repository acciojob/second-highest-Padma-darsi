//your JS code here. If required.
function secondHighest(arr) {
    // Check if the array is empty, has only one element, or all elements are the same
    if (arr.length < 2) return -Infinity;

    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? -Infinity : second;
}