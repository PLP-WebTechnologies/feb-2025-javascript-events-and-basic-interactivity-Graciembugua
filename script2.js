const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

button.addEventListener("mouseover", function() {
  this.style.backgroundColor = "#3e81f4"; // Darker green on hover
});

button.addEventListener("mouseout", function() {
  this.style.backgroundColor = "#4CAF50"; // Restore original color
});

document.addEventListener("keypress", function(event) {
  alert("Key pressed: " + event.key);
});

let timer;
button.addEventListener("mousedown", function() {
  timer = setTimeout(function() {
    alert("Secret action triggered (long press or double click)!");
  }, 500); // Adjust delay as needed
});

button.addEventListener("mouseup", function() {
  clearTimeout(timer);
});

button.addEventListener("dblclick", function() {
  clearTimeout(timer);
  alert("Secret action triggered (double click)!");
});