var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval

function timer(){
    msec++
    msecHeading.innerHTML = msec;

    if (msec >=100 ){
        sec++ 
        secHeading.innerHTML = sec
        msec = 00;
    }else if (sec >= 60){
        min++
        minHeading.innerHTML = min
        sec = 00
    }
}
 
function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false
}

function reset(){
    stop()
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    document.getElementById("start").disabled = false
}

function start(){
        interval = setInterval(timer, 10);
    document.getElementById("start").disabled = true
}

