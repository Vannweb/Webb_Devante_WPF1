alert("We're going to figure out if you need to stop at the next gas station.");
var gasEff = Number(prompt("Please enter the gas efficiency of the car(in mpg):"));
var reading = Number(prompt("At what percent is your gas gauge?(From 0 to 100)"));
var capacity = Number(prompt("How much gas, in gallons, can your car hold?"));

reading /= 100;

capacity *= reading;

var gasRemain = capacity * gasEff;

if (gasRemain > 200){
    alert("Yes, you can make it to the next gas station without stopping for gas. \n You have " + gasRemain + " gallons of gas left.");
    console.log("Yes, you can make it to the next gas station without stopping for gas. \n You have " + gasRemain + " gallons of gas left.")
}else if (gasRemain <= 200){
    alert("You only have " + gasRemain + " gallons of gas left. You Should consider stopping at the next gas station.");
    console.log("You only have " + gasRemain + " gallons of gas left. You Should consider stopping at the next gas station.")
}else{
    alert("I believe something went wrong. I'm sorry. Please refresh and try again.");
    console.log("I believe something went wrong. I'm sorry. Please refresh and try again.");
}



