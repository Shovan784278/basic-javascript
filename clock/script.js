// Function to update the clock
function updateClock() {
    var clockElement = document.querySelector('.clock'); // Get the clock element
    var currentTime = new Date(); // Get the current time
  
    // Format the time into hours, minutes, and seconds
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Add leading zeros to minutes and seconds if they are less than 10
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Construct the formatted time string
    var timeString = hours + ":" + minutes + ":" + seconds;
  
    // Display the formatted time in the clock element
    clockElement.textContent = timeString;
  }
  
  // Call the updateClock function every second
  setInterval(updateClock, 1000);
  
  // Call the function once to initialize the clock
  updateClock();
  