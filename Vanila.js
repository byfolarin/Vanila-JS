window.onload = function() {
  let buttonStart = document.getElementById("button-start")
  let buttonStop = document.getElementById("button-stop")
  let buttonReset = document.getElementById("button-reset") 

  let seconds = document.getElementById("seconds")
  let tens = document.getElementById("tens")
  let Interval;


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

    
      buttonReset.addEventListener("click", ()=>{
          let tensTime = 0+"0";
          let secondsTime = 0+"0";         
          seconds.innerHTML=secondsTime
          tens.innerHTML=tensTime
      })


   


      
 
 
  
  






















};