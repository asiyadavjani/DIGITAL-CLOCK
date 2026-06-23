function updateClock() {
    // 1. Computer se current time aur date nikalna
    let now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // 2. Agar number 10 se chhota ho (jaise 3), toh aage '0' lagana (03 banane ke liye)
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    // 3. HTML ke andar text ko update karna
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    // 4. Dynamic Live Date dikhane ke liye (Options set kiye: Day, Month, Year)
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let currentDate = now.toLocaleDateString('en-US', options); 
    document.getElementById("date").innerHTML = currentDate;
}

// 5. Har 1 second (1000 milliseconds) baad is function ko baar-baar chalana
setInterval(updateClock, 1000);

// Pehli baar page khulte hi clock turant chal jaye
updateClock();