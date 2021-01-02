window.onload = function showTime(){

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes ();
    var s = date.getSeconds();

    if (h < 10){
        h = "0" + h;
    }
    else if (h >= 10){
        h = h;
    }

    if (m < 10){
        m = "0" + m;
    }
    else if (m >= 10){
        m = m;
    }

    if (s < 10){
        s = "0" + s;
    }
    else if (s >= 10){
        s = s;
    }
    
    time = h + ":" + m + ":" + s;

    document.getElementById("digitalClock").innerText = time;
    document.getElementById("digitalClock").textContent = time;

    setTimeout(showTime,1000);
}
