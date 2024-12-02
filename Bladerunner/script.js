async function initializeTerminal() {
    const output = document.getElementById("output");
    const cursor = document.getElementById("cursor");

    // Fetch the content of the baseline.txt file
    const response = await fetch('baseline.txt');
    const message = await response.text(); // Use the file's content as the message

    let index = 0;
    let isCyan = false; // Flag to track if the text should be cyan

    // Helper function to simulate typing with special rules
    function type() {
        if (index < message.length) {
            const char = message[index];

            if (char === '\n') {
                // Add a new line by appending a <br> element and reset text color
                output.innerHTML += '<br>';
                isCyan = false; // Reset cyan flag
                index++;
                setTimeout(type, 30);
            } else if (char === '?') {
                // Add the question mark and pause for 500ms
                output.innerHTML += char;
                isCyan = true; // Activate cyan mode for the following text
                index++;
                setTimeout(type, 500); // Pause after a question mark
            } else if (isCyan) {
                // Add cyan-styled text
                output.innerHTML += `<span style="color: cyan;">${char}</span>`;
                index++;
                setTimeout(type, 30);
            } else {
                // Normal typing
                output.innerHTML += char;
                index++;
                setTimeout(type, 30);
            }
        }
    }

    type();
}

// Initialize the terminal on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeTerminal);
