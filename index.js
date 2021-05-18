// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');
let input1= input.question("Enter the number of Astronauts:");
let date ="Monday 2019-03-18";
let time ="10:05:34 AM";
let astronautCount = 7;
let astronautStatus="ready";
let averageAstronautMassKg = 80.7;
let crewMassKg =input1 * averageAstronautMassKg;
let fuelMassKg =760000;
let shuttleMassKg = 	74842.31;
let totalMassKg =crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius= -225;
let fuelLevel ="100%";
let weatherStatus="clear";
let des="-------------------------------------";
let des1="> LC04 - LAUNCH CHECKLIST";
let des2 = "> ASTRONAUT INFO";
let des3="> FUEL DATA";
let des4 = "> MASS DATA";
let des5 ="> FLIGHT PLAN";
let des6= "> OVERALL STATUS";
let kg ="kg";


// Write code to generate the LC04 report here:
console.log(des);
console.log(des1);
console.log(des);
console.log("Date: ",date );
console.log("Time: ",time);
console.log(des);
console.log(des2);
console.log(des);
console.log("* count:",input1 );
console.log("* status: ",astronautStatus);
console.log(des);
console.log(des3);
console.log(des);
console.log("* Fuel temp celsius: ",fuelTempCelsius,"c");
console.log("* Fuel level: ",fuelLevel);
console.log(des);
console.log(des4);
console.log(des);
console.log("* Crew mass:",crewMassKg,kg);
console.log("* Fuel mass:",fuelMassKg,"kg");
console.log("* Shuttle mass:", shuttleMassKg,"kg");
console.log("* Total mass: ", totalMassKg,"kg");
console.log(des);
console.log(des5);
console.log(des);
console.log("* weather :",weatherStatus);
console.log(des);
console.log(des6);
console.log(des);
console.log("* Clear for takeoff : YES");


// Declare and initialize the 12 variables here:




// Write code to generate the LC04 report here:




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.