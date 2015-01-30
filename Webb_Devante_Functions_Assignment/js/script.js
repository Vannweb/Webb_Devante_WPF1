/*
Devante Webb
1/29/15
Functions Assignment
 */
alert("So you're moving to San Francisco! \nThat's a big move. It's a beautiful city to live in, however it can get expensive." +
" Here, we're gonna give you an idea of your expenses, and tell you how much space you'll have, to maybe better prepare you for your move.");

var occupants = Number(prompt("First how many room mates will you have? We'll use this to figure the price of rent, or get an idea of it:"));
averageRent = 2100;

var roomL = Number(prompt("Next we'll get an idea of how much space you'll have. Simply ask the landlord for the apartment specs." +
"\nLet's begin with the length, in feet please:"));

var roomW = Number(prompt("Next find out the width of the room, and enter it here:"));

var roomH = Number(prompt("Finally, we'll take the height in here:"));


var priceToLive = function rentPrice(occupy, rent){
    return rent / occupy;
};

var total = priceToLive(occupants, averageRent);

function roomVol(w,h,l){
    return w * h * l;
}