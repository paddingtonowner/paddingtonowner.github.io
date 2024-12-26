var time;
var timeEl = document.getElementById("time");

function loop() {
  // Your code here
  time = new Date().getTime();
  timeEl.textcontent = time;

  // Call the loop function again after 33.33 ms (1000 ms / 30 fps = 33.33 ms)
  setTimeout(loop, 1000 / 30);
}

// Start the loop
loop();
