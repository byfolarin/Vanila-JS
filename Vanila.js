window.onload = function() {
  let secondsTime = 00;
  let tensTime = 00;
  let buttonStart = document.getElementById("button-start")
  let buttonStop = document.getElementById("button-stop")
  let buttonReset = document.getElementById("button-reset") 

  let seconds = document.getElementById("seconds")
  let tens = document.getElementById("tens")
  let interval;


 

    buttonStart.addEventListener("click", ()=>{
      console.log("Start")
    })

 

      buttonStop.addEventListener("click", ()=>{
        console.log("Stop")
      })

    
      buttonReset.addEventListener("click", ()=>{
          seconds.innerHTML=secondsTime
          tens.innerHTML=tensTime
      })
 
 
  
  






















};