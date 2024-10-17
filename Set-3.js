// Question 5: Reverse the order of elements in an array in-place.
function rotateArray() {
    // Get user input for the array and rotation steps
    const input = document.getElementById('arrayInput').value;
    const k = parseInt(document.getElementById('rotateSteps').value);

    // Convert input string to an array of numbers
    const arr = input.split(',').map(Number);

    // Check for valid input
    if (arr.some(isNaN) || isNaN(k) || k < 0) {
        document.getElementById("result5").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Get the length of the array
    const n = arr.length;

    // Handle cases where k is larger than n
    const steps = k % n;

    // Rotate the array
    const rotatedArray = [...arr.slice(n - steps), ...arr.slice(0, n - steps)];

    // Display the rotated array
    document.getElementById("result5").innerHTML = `Rotated Array: [${rotatedArray.join(', ')}]`;
}