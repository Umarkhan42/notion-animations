// Your provided function to generate random URLs
function generateRandomUrl() {
    const start = [
        "http", "https", "ftp", "ftps", "file", "mailto", "data", "ws", "wss",
        "smtp", "smtps", "imap", "imaps", "pop", "pop3", "telnet", "ssh", "rtsp",
        "rtmp", "news", "git", "svn", "irc", "nntp", "ssh", "telnet", "gopher",
        "ipfs", "chrome", "file", "about", "localhost", "data", "ws", "wss", "webrtc",
        "webcal", "ldap", "mms", "telnet", "vpn", "sftp", "rsync", "sms", "sms",
        "sip", "sip", "xmpp", "magnet"
    ];

    const end = [
        ".org", ".com", ".co.uk", ".org.uk", ".net", ".gov", ".edu", ".int",
        ".mil", ".eu", ".us", ".ca", ".de", ".fr", ".jp", ".in", ".cn", ".au",
        ".it", ".ru", ".br", ".es", ".mx", ".co", ".tv", ".io", ".me", ".co.nz",
        ".sa", ".ae", ".ch", ".se", ".pl", ".nl", ".be", ".dk", ".fi", ".cz",
        ".kr", ".hk", ".sg", ".tw", ".za", ".gr", ".pt", ".cl", ".ar", ".pe",
        ".vn", ".id", ".ph", ".th", ".kr", ".bh", ".om", ".qa", ".kw", ".eg",
        ".ng", ".ke", ".ug", ".tz", ".gh", ".np", ".lt", ".lv", ".ee", ".sk",
        ".hu", ".bg", ".ro", ".pl", ".mk", ".hr", ".si", ".lu", ".is", ".li",
        ".md", ".mt", ".rs", ".ge", ".az", ".by", ".kz", ".tj", ".tm", ".uz",
        ".kg", ".mn", ".np", ".lk", ".bd", ".mm", ".kh", ".la", ".mw"
    ];

    const randomIndexS = Math.floor(Math.random() * start.length);
    const randomIndexE = Math.floor(Math.random() * end.length);
    let res = start[randomIndexS];
    res += "://";
    res += generateRandomString();
    res += end[randomIndexE];

    return res;
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = Math.floor(Math.random() * 20) + 10;
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// Configuration
const NUM_TEXTS = 10; // Number of text elements at a time
const container = document.getElementById("container");

// Function to check if a new position overlaps with existing elements
function isOverlapping(newX, newY, width, height, existingPositions) {
    for (let pos of existingPositions) {
        if (
            newX < pos.x + pos.width &&
            newX + width > pos.x &&
            newY < pos.y + pos.height &&
            newY + height > pos.y
        ) {
            return true; // Overlap detected
        }
    }
    return false;
}

// Function to generate random non-overlapping text positions
function generateNonOverlappingPositions(numTexts) {
    const positions = [];
    for (let i = 0; i < numTexts; i++) {
        let newX, newY, textWidth, textHeight, overlaps;
        const url = generateRandomUrl(); // Generate a random URL for each text

        // Create a temporary text element to measure dimensions
        const tempText = document.createElement("div");
        tempText.classList.add("text");
        tempText.textContent = url;
        tempText.style.visibility = "hidden";
        container.appendChild(tempText);

        textWidth = tempText.offsetWidth;
        textHeight = tempText.offsetHeight;

        do {
            // Generate random positions
            newX = Math.random() * (window.innerWidth - textWidth);
            newY = Math.random() * (window.innerHeight - textHeight);

            // Check for overlaps
            overlaps = isOverlapping(newX, newY, textWidth, textHeight, positions);
        } while (overlaps);

        // Add the text element with the calculated position
        const textElement = document.createElement("div");
        textElement.classList.add("text");
        textElement.style.left = `${newX}px`;
        textElement.style.top = `${newY}px`;
        textElement.style.animationDelay = `${Math.random() * 3}s`; // Random animation delay
        textElement.textContent = url;

        // Append to container
        container.appendChild(textElement);

        // Save the position for future overlap checks
        positions.push({ x: newX, y: newY, width: textWidth, height: textHeight });

        // Remove temporary element
        tempText.remove();
    }
}

// Function to handle the addition and removal of links over time
function updateLinks() {
    // Clear existing links
    const existingLinks = document.querySelectorAll('.text');
    existingLinks.forEach(link => {
        link.remove(); // Remove the link element
    });

    // Add new random links
    generateNonOverlappingPositions(NUM_TEXTS);
}

// Initially, generate random links
updateLinks();

// Set interval to update the links every 5 seconds (you can adjust this as needed)
setInterval(updateLinks, 5000);