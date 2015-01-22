// Devante Webb 1/15/2014, Expressions determining Product Quantity
// I welcome the user to the website and introduce them to the purpose of the site
alert("Welcome Starbucks Partner! Today we're going to take inventory and determine what we need to order for the upcoming month.");
var productName =["Ham & Swiss Croissants", "Bacon Gouda Sandwiches", "Tomato Mozzarella Paninis"]; //here I make an array containing the product names
/*Here a let user assign a number to a variable so I can use it to call back to the strings in the array and use them
* later in the code without having to retype the product names. Also question professor, how do we break code into two separate lines, so that
* when it gets past this white line you can break it up. Is that necessary?*/
var product = prompt("Enter which product we're recording: \n0 for Ham & Swiss Croissant. \n1 for Bacon Gouda Sandwich. \n2 for Tomato Mozzarella Panini.");
/*Here I use the user to assign values to the week variables through prompts. I use the variable product to call back to the productName
* array to use the name of the item the user indicated*/
var firstWeek = prompt("How many " + productName[product] + " did we sell in week one?");
var secondWeek = prompt("How many " + productName[product] + " did we sell in week two?");
var thirdWeek = prompt("How many " + productName[product] + " did we sell in week three?");
var fourthWeek = prompt("Finally, how many " + productName[product] + " did we sell in week four?");

// I'm so excited about this code because previously I couldn't even get it to work, it would just concatenate.
// after I finally figured it out and tested it I was ecstatic! I created this code that seemed so cool in the way that
// it operates. everything works this time and I'm hopeful with the future of my coding.


// Here I take all 4 week variables and add them together. I use the "Number" casting to make sure the variables don't just
//concatenate
var sumOfproducts = (Number(firstWeek) + Number(secondWeek) + Number(thirdWeek) + Number(fourthWeek)); //

Average = sumOfproducts / 4; // Here I divide the sum of the sandwiches by 4 to gain the average, and assign it to the Average variable
// I multiply the average by .5 then add the average to make up for sandwiches purchased, so the user can make sure he or she
// has enough sandwiches next month. Then I assign the number to the "result" variable
result = Average * .5 + Average;


//Then I print them both to the console and the user!

alert("You need to purchase " + result + " packages of " + productName[product] + " next month.");

console.log("You need to purchase " + result + " copies of " + productName[product] + " next month.");

// Also I work for Starbucks here in San Francisco