// Define the segments for each digit
const segments = [
    [1, 1, 1, 0, 1, 1, 1], // 0
    [0, 1, 1, 0, 0, 0, 0], // 1
    [1, 1, 0, 1, 1, 0, 1], // 2
    [1, 1, 1, 1, 0, 0, 1], // 3
    [0, 1, 1, 1, 0, 1, 0], // 4
    [1, 0, 1, 1, 0, 1, 1], // 5
    [1, 0, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 0, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1]  // 9
];

// Function to display a digit on segments
function displayDigit(digit) {
    for (let i = 0; i < 7; i++) {
        const segmentID = "segment" + String.fromCharCode(65 + i);
        const segment = document.getElementById(segmentID);
        // Set background color based on segment status
        segment.style.backgroundColor = segments[digit][i] ? "red" : "black";
    }
    const displayArea = document.getElementById("tampilanBiner");
    // Update display area with binary information
    displayArea.innerHTML = "Biner ke-  " + digit + " : " + segments[digit].join(", ");
}

// Function to clear the display area
function clearDisplay() {
    for (let i = 0; i < 7; i++) {
        const segmentID = "segment" + String.fromCharCode(65 + i);
        const segment = document.getElementById(segmentID);
        // Reset background color to black
        segment.style.backgroundColor = "black";
    }

    const displayArea = document.getElementById("tampilanBiner");
    // Clear the content of the display area
    displayArea.innerHTML = "";
}
