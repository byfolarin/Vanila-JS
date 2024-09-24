window.onload = function() {
  let secondsTime = "00";
  let buttonStart = document.getElementById("button-start")
  let buttonStop = document.getElementById("button-stop")
  let buttonReset = document.getElementById("button-reset") 

  let seconds = document.getElementById("seconds")
  let tens = document.getElementById("tens")
  let interval;


 
  function getStart (){
    buttonStart.addEventListener("click", ()=>{
      console.log("Start")
    })
  }
 
    function getStop (){
      buttonStop.addEventListener("click", ()=>{
        console.log("Stop")
      })
    }
    
    function getRestart (){
      buttonReset.addEventListener("click", ()=>{
        console.log("Reset")
      })
    }
 
  
  






















};