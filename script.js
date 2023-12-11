    function displayDigit(digit) {
        // Define the segments for each digit
        const segments =    [
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

        for (let i = 0; i < 9; i++) {
            const segmentID = "segment" + String.fromCharCode(65 + i);
            const segment = document.getElementById(segmentID);
            segment.style.backgroundColor = segments[digit][i] ? "red" : "gray";
            const displayArea = document.getElementById("tampilanBiner");
            displayArea.innerHTML = "Biner ke- " + digit + " : " + segments[digit];
        };


    }
    function clearDisplay() {
        for (let i = 0; i < 9; i++) {
            const segmentID = "segment" + String.fromCharCode(65 + i);
            const segment = document.getElementById(segmentID);
            segment.style.backgroundColor = "gray";
        }
    }