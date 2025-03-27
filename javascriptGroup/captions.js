
/*  below is the code cycle to allow users to move through the various captions (prayers) */  

let rosary = [];
let prayerIndex = -1;

function pray() {
    const prayerDisplay = document.getElementById("prayerDisplay");

    if (!rosary.length) {
        prayerDisplay.innerHTML = "Rosary is not finished loading yet";
        return;
    }

    if (prayerIndex === -1) {
        prayerDisplay.innerHTML = "Let me guide you through this Lenten Catholic rosary. Click next to begin.";
    }
   else if (prayerIndex >= 0 && prayerIndex < rosary.length)
    {
        prayerDisplay.innerHTML = rosary[prayerIndex];
    }
    else if (prayerIndex >= rosary.length) {
        console.log("End of rosary");
        prayerDisplay.innerHTML = "Thank you for praying with us. May God bless you and keep you.";
        prayerIndex = rosary.length -1; /* -1 is good coding practice to ensure you don't go out of bounds/overflows */
    }
}

function nextPrayer() {
    prayerIndex++;
    console.log("Next prayer index: ", prayerIndex); /* will display in "inspect elements" and will return the next index number to show that the index is working properly*/
    if (prayerIndex >= rosary.length) {
        prayerIndex = 0; 
    }
    pray();
}

function previousPrayer() {
    prayerIndex--;
    console.log("Previous prayer index: ", prayerIndex);
    if (prayerIndex < 0) {
        prayerIndex = rosary.length - 1; /* -1 is good coding practice to ensure you don't go out of bounds/overflows */
    }
    pray();
}

document.addEventListener("DOMContentLoaded", () =>{
    fetch('captions.json') /* finds the json file */ 
        .then(response => response.json()) /* response determines how you process the json file, and converts the json to an object with usable data */ 
        .then(data => {
            rosary = data.rosary; /* index-ifies the rosary */
            pray();
        })
        /* "catch" isnt really necessary for my code to function, but it's deemed as good coding practice anyways. So, here it is. */ 
        .catch(error => {
            console.error("Error loading rosary. Saying a prayer to St Therese of Lisieux:", error); /* if any errors occur, this'll help handle them */ 
            document.getElementById("prayerDisplay").innerHTML = "Error loading rosary. Saying a prayer to St Therese of Lisieux:";
        })
});
