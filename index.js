function updateClock() {
  
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    
     if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

  
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

   
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let currentDate = now.toLocaleDateString('en-US', options); 
    document.getElementById("date").innerHTML = currentDate;
}


setInterval(updateClock, 1000);


updateClock();