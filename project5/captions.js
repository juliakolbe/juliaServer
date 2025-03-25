const rosary = [
        
        "In the name of the Father, and of the Son, and of the Holy Spirit, Amen",

        
            "I believe in God, the Father Almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, " +
            "who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; " +
            "He descended into hell; on the third day He rose again from the dead; He ascended into heaven, " +
            "and is seated at the right hand of God the Father Almighty; from there He will come to judge the living and the dead. " +
            "I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, " +
            "the resurrection of the body, and life everlasting. Amen.",
          
            
            "For our Holy Father's Intentions: Our Father ...",
            "For an increase in Faith: Hail Mary ...", 
            "For an increase in Hope: Hail Mary ...", 
            "For an increase in Charity: Hail Mary ...", 
          
          
            "First Decade: Our Father ...",
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Glory be ...",
            "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy.",

            "Second Decade: Our Father ...",
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Glory be ...",
            "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy.",
          
            "Third Decade: Our Father ...",
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Glory be ...",
            "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy.",
            
            "Fourth Decade: Our Father ...",
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Glory be ...",
            "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy.",
            
            "Fifth Decade: Our Father ...",
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Hail Mary ..." +
            "Glory be ...",
            "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy.",
          
            "Hail, Holy Queen, Mother of mercy, our life, our sweetness and our hope. " +
            "To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, " +
            "mourning and weeping in this valley of tears. Turn then, most gracious Advocate, " +
            "thine eyes of mercy toward us, and after this, our exile, show unto us the blessed fruit of thy womb, Jesus. " +
            "O clement, O loving, O sweet Virgin Mary. Pray for us, O Holy Mother of God, that we may be made worthy of the promises of Christ. Amen.",

            "Let us pray: O God, whose only-begotten Son, by His life, death and resurrection, has purchased for us the rewards of eternal life, " +
            "grant, we beseech Thee, that by meditating upon these mysteries of the most holy Rosary of the Blessed Virgin Mary, " +
            "we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.",

            "Thank you for praying with me. Click next to pray again!"


          ];

/*  below is the code cycle to allow users to move through the various captions (prayers) */  

let index = -1;

function pray() {
    const prayerDisplay = document.getElementById("prayerDisplay");

    if (index === -1) {
        prayerDisplay.innerHTML = "Let me guide you through this Lenten Catholic rosary. Click next to begin.";
    }
   else if (index >= 0 && index < rosary.length)
    {
        prayerDisplay.innerHTML = rosary[index];
    }
    else if (index >= rosary.length) {
        console.log("End of rosary");
        prayerDisplay.innerHTML = "Thank you for praying with us. May God bless you and keep you.";
        index = rosary.length -1; /* -1 is good coding practice to ensure you don't go out of bounds/overflows */
    }
}

function nextPrayer() {
    index++;
    console.log("Next prayer index: ", index); /* will display in "inspect elements" and will return the next index number to show that the index is working properly*/
    if (index >= rosary.length) {
        index = 0; 
    }
    pray();
}

function previousPrayer() {
    index--;
    console.log("Previous prayer index: ", index);
    pray();
}

document.addEventListener("DOMContentLoaded", pray);
