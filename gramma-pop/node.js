function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    if(document.getElementById("button").textContent === "Click to hide the time.") {
        document.getElementById('clock').textContent = currentTime;
    } else {
        document.getElementById('clock').textContent = '';
    }
}

function changeButton() {
    const b = document.getElementById("button")
    if(b.textContent === "Click to see the time.") {
        b.textContent = "Click to hide the time.";
    } else {
        b.textContent = "Click to see the time.";
    }
};

document.getElementById("button").addEventListener("click",changeButton);

// Update the clock every second
setInterval(updateClock, 0);

updateClock();
