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

function displayDigit(digit) {
    for (let i = 0; i < 7; i++) {
        const segmentID = "segment" + String.fromCharCode(65 + i);
        const segment = document.getElementById(segmentID);
        segment.style.backgroundColor = segments[digit][i] ? "red" : "black";
    }
    const displayArea = document.getElementById("tampilanBiner");
    displayArea.innerHTML = "Biner ke-  " + digit + " : " + segments[digit].join(", ");
}

function clearDisplay() {
    for (let i = 0; i < 7; i++) {
        const segmentID = "segment" + String.fromCharCode(65 + i);
        const segment = document.getElementById(segmentID);
        segment.style.backgroundColor = "black";
    }

    const displayArea = document.getElementById("tampilanBiner");
    displayArea.innerHTML = "";
}