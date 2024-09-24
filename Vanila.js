window.onload = function() {
  let buttonStart = document.getElementById("button-start")
  let buttonStop = document.getElementById("button-stop")
  let buttonReset = document.getElementById("button-reset") 

  let seconds = document.getElementById("seconds")
  let tens = document.getElementById("tens")
  let Interval;


 

    buttonStart.addEventListener("click", ()=>{
      setInterval(,1000)
      let tensTime = 0;
      let secondsTime = 0;  
      seconds.innerHTML = secondsTime
      tens.innerHTML =tensTime
    })

 

      buttonStop.addEventListener("click", ()=>{
        clearInterval(Interval)
      })

    
      buttonReset.addEventListener("click", ()=>{
          let tensTime = 0+"0";
          let secondsTime = 0+"0";         
          seconds.innerHTML=secondsTime
          tens.innerHTML=tensTime
      })



      
 
 
  
  






















};