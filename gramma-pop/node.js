function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    if(document.getElementbyId("button").textContent === "Ta-Da!") {
        document.getElementById('clock').textContent = currentTime;
    } else {
        document.getElementById('clock').textContent = '';
    }
}

function changeButton() {
    const b = document.getElementById("button");
    const button = b.textContent;
    if(button === "Ta-Da!") {
        b.textContent = "Click to see the time.";
    } else {
        b.textContent = "Ta-Da!";
    }
};

document.getElementById("button").addEventListener("click",changebutton);

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
