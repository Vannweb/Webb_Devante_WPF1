/**
 Devante Webb
 Functions Worksheet
 1/29/15.
 */
// This line welcomes the user to the page and explains it's purpose
alert("Welcome, bee stings can be excruciating and sometimes deadly. It could help to know just how many bee stings it" +
" would take to be fatal. \nHere, we'll tell you that.");
/*this line gathers the users weight and assigns it to the weight variable through a prompt. Makes sure it's treated as an integer
through Number casting*/
var weight = Number(prompt("First we need to know how much you weigh. We'll do the rest from there. \nEnter your " +
"weight in pounds:"));
//This line defines the variable result and assigns the functions result to the variable result. Also invokes the function
var result = stingCalc(weight);
//
function stingCalc(lbs){
    return lbs * 8.666666667
}
alert("It would take " + result + " bee stings to kill someone of that weight. Please refresh to try a new weight." +
" Thank you.");