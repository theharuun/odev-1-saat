let myName=prompt("Adinizi Yaziniz: ")
let myNameDOM=document.querySelector("#myName")
myNameDOM.innerHTML = myName.charAt(0).toUpperCase() + myName.slice(1);  // prompt ile alınan ismi burada sayfamızın myName id  old yer atadık

function saat () {
    const today = new Date();
    let day = today.getDay();
    let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + dayName.innerHTML;
    if (day == 0) { dayName.innerHTML = "Pazartesi"; }
    else if(day == 1) { dayName.innerHTML = "Sali"}
    else if(day == 2) { dayName.innerHTML = "Çarşamba" }
    else if(day == 3) { dayName.innerHTML = "Perşembe"} 
    else if(day == 4) { dayName.innerHTML = "Cuma" }
    else if(day == 5) { dayName.innerHTML = "Cumartesi" }
    else if(day == 6) { dayName.innerHTML = "Pazar"  }

    let saatDOM=document.querySelector(`#mySaat`)
    saatDOM.innerHTML = date;
    setInterval(saat, 1000);
}
saat();


