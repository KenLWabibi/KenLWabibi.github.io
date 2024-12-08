"use strict";

/*

   Countdown Clock
   Author: ken Wabibi 
   Date: 08Dec24  

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval(runClock, 1000);

/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Calculate the days until January 1st */
   var newYear = new Date("January 1, " + (currentDay.getFullYear() + 1));
   var timeDifference = newYear - currentDay; 
   var daysLeft = timeDifference / (1000*60*60*24);

   /* Calculate the hours left in the currrent day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   /* Calculate the minutes and seconds left in teh current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   var secsLeft = (minsLeft -Math.floor(minsLeft)) * 60;

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}


