alert("We're going to figure out if you need to stop at the next gas station."); //I use this to alert the user of the purpose of the website
//I then ask the user about the cars mpg through a prompt
var gasEff = Number(prompt("Please enter the gas efficiency of the car(in mpg):"));
var reading = Number(prompt("At what percent is your gas gauge?(From 0 to 100)")); //I ask the user how much gas is left in the car
var capacity = Number(prompt("How much gas, in gallons, can your car hold? \nPlease round your answer to use only whole numbers")); //finally I ask the user how much gas the car can hold
// I user the "Number" casting to ensure all info collected is a numerical digit and doesn't concatenate. I've had issues with this in the past so this is a god send
reading /= 100; // here a change the number entered by the user into a percent

capacity *= reading; //I multiply the capacity by this percent to find out how many gallons of gas are left in the car

var gasRemain = capacity * gasEff; // lastly I use this equation to figure out how far the car can travel off of that gas
// I use an if else if strong of statements to determine whether to print out a message that tells the user he or she can continue or encourage them to stop and get gas
//I print these all out to the user and the console
if (gasRemain > 200){
    alert("Yes, you can make it to the next gas station without stopping for gas. \nYou have " + gasRemain + " gallons of gas left.");
    console.log("Yes, you can make it to the next gas station without stopping for gas. \n You have " + gasRemain + " gallons of gas left.")
}else if (gasRemain <= 200){
    alert("You only have " + gasRemain + " gallons of gas left. You Should consider stopping at the next gas station.");
    console.log("You only have " + gasRemain + " gallons of gas left. You Should consider stopping at the next gas station.")
}else{
    alert("I believe something went wrong. I'm sorry. Please refresh and try again.");
    console.log("I believe something went wrong. I'm sorry. Please refresh and try again.");
}



