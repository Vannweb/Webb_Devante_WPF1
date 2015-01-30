//Functions Worksheet Devante Webb 1/29/2015
// Here I welcome the user to the website and inform them of
alert("Hello! I will help you find the circumference of a circle.");
// I made a variable for the radius and I prompt the user to enter the radius of the circle
var radius = Number(prompt("What is the radius of the circle?"));
// made a variable for the circumference which is essentially the result and then I invoke the function
var circumference = calCirc(radius);
// make the functions here and also make the parameters
// var pi = Math.PI
function calCirc(r){
    return r * 2 * Math.PI; // I return the result here. I multiply the radius using the parameter, by two then by PI
}
alert("The Circumference of your circle is " + circumference + ". Thank you for using me!"); //I tell the user what the result is using the circumference variable
console.log("The Circumference of your circle is " + circumference + ". Thank you for using me!"); // finally I print the circumference to the console