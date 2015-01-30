/*
Devante Webb
1/29/15
Functions Assignment
 */
//So I begin by introducing the user to the page and telling him what the purpose of it is
//I used moving to california because I recently did and the idea was fresh in my mind. So it's done from my Point of View
//Moving to a new place and staying with roommates
alert("So you're moving to San Francisco! \nThat's a big move. It's a beautiful city to live in, however it can get expensive." +
" Here, we're gonna give you an idea of your expenses, and tell you how much space you'll have, to maybe better prepare you for your move.");
//I establish a variable for the amount of people staying in the apartment.
var occupants = Number(prompt("First how many people are living here? We'll use this to figure the price of rent, or get an idea of it:"));
while (occupants === "" || isNaN(occupants) || occupants < 1){ //here I make a while loop to validate that the user enters a number greater than 0 and is a number and
    occupants = Number(prompt("I'm sorry we couldn't use that one. Please enter a number that is 1 or greater:")); // cont* is not blank
}

averageRent = 2100; // establish that the average rent is 2100 for use in the code later
// ask for the length of the place they're living
var roomL = Number(prompt("Next we'll get an idea of how much space you'll have. Simply ask the landlord for the apartment specs." +
"\nLet's begin with the length, in feet please:")); //
while(roomL === "" || isNaN(roomL)){ //here I loop back if the value entered is not a number or blank
    roomL = Number(prompt("Please don't Leave the answer blank or enter text. Enter a number only:"));
}// I ask the user for the width of the room here
var roomW = Number(prompt("Next find out the width of the room, and enter it here:"));
while (roomW === "" || isNaN(roomW)){ //here I loop back if the value entered is not a number or blank
    roomW = Number(prompt("Please don't Leave the answer blank or enter text. Enter a number only:"));
}
// here i ask the user for the height of the room
var roomH = Number(prompt("Finally, we'll take the height in here:"));
while (roomH === "" || isNaN(roomH)){ //here I loop back if the value entered is not a number or blank
    roomH = Number(prompt("Please don't Leave the answer blank or enter text. Enter a number only:"));

}
// I establish an anonymous function here for the rent per month equation
var priceToLive = function rentPrice(occupy, rent){
    return rent / occupy; //I divide the rent by the amount of people living in the apartment, then return the value to the main code
};
//here I invoke the priceToLive function and assign the value to the variable "total" and it can be done here since it's after it as an anonymous function
var total = priceToLive(occupants, averageRent);
//here I invoke the room volume function. I can do it before the fuction appears in the code, because it is not anonymous and is constant
var space = roomVolForm(roomW, roomH, roomL);

//Here I make the roomVolForm formula
function roomVolForm(w,h,l){
    return w * h * l; //this line multiplies the w h and l parameters to find the volume then returns the value to the main code.
}// I alert the user of the amount he or she will have to pay a month using the total variable
alert("The total you will have to pay a month for a 1 bedroom apartment should be around $" + total + ". This is just an estimate but expect something around this price.");
// I then print to the user about how much space in square feet they will have to divide among themselves or just for him or her
alert("And the amount of space you should expect is "+ space + " square feet. I hope this is enough for all of your things!" );
// lastly I send out one more message about living in san francisco as a touch of humanity for my code.
alert("Living in San Francisco is expensive. However it can be a place of much opportunity and discovery. I hope you enjoy your home!");

/*I tested the code by entering the values 1000 500 and 700, and forgot to write down the total! However I will be testing more
I used the values dad mom spaghetti and 0 to test the first while loop.
Then I used the values jet black loutre and 50 to check the second loop

 */