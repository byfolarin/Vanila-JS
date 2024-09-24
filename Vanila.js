window.onload = function() {
  let buttonStart = document.getElementById("button-start")
  let buttonStop = document.getElementById("button-stop")
  let buttonReset = document.getElementById("button-reset") 

  let seconds = document.getElementById("seconds")
  let tens = document.getElementById("tens")


  let tensTime = 0;
  let secondsTime = 0;
  let timer;

  
   function startTime() {
    tensTime++;
    
    if (tensTime > 99) {
      secondsTime++;
      tensTime = 0;
      seconds.innerHTML = secondsTime < 10 ? "0" + secondsTime : secondsTime;
    }
    
    tens.innerHTML = tensTime < 10 ? "0" + tensTime : tensTime;
  }
  

  buttonStart.addEventListener("click", () => {
    if (!timer) {
      timer = setInterval(startTime, 10);
    }
  });
 
  buttonStop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
  });

    
  buttonReset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    tensTime = 0;
    secondsTime = 0;
    tens.innerHTML = "00";
    seconds.innerHTML = "00";
  }
      )

};