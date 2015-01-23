alert("Okay intern, it's time to pick up coffee for the office."); // I alert the user of the purpose of the website
var people = Number(prompt("First we need to know how many people are in your office:")); // I ask the user how many he's/she's buying for
var budget = Number(prompt("How much are we looking to spend today?")); //Ask the user about how much he's/she's allowed to spend
var preference = prompt("Next we need to know what kind of caffeine we're buying, lattes or coffee:"); //then I ask whether we're calculating for espresso or drip coffee
var total; // define the "total variable

if(preference == "lattes" || preference == "Lattes" ){ //here I allow the user to use capitol or lowercase string for lattes, there has to be an easier way to do this though. I would love to know
    alert("Okay then, we're going with espresso. A 12oz latte would cost $3.10 for each person"); //alert the user that we're going for espresso
     total = people * 3.10; //get the total by multiplying the amount of lattes by people
    //console.log(total);
// else if to define the drip coffee condition
}else if(type = prompt("You can either buy this in bulk as a Coffee Traveler, which serves twelve 8oz. cups in a convenient 96oz. disposable thermos for $12.95," +
" or you can buy each person their own 12 oz cup of coffee for $1.80 each for a more personal touch \nPlease enter 'Traveler' or 'individual':")) {
    if (type == "traveler" || type == "Traveler") { // allow the user to use lower case or capitol here as well and also determines what we're calculating for.
        people /= 12; // divide the amount of people by twelve, this i how many cups of coffee a single traveler holds.
        //console.log(total);

        total = people * 12.95; //you then multiply that number by twelve to get how much you're spending in traveler coffee
    } else total = people * 1.80; // otherwise you just multiply how many people that are in the office by the price of drip coffee
   // (type == "traveler" || type == "Traveler") ? (people /= 12) (total = people * 12.95) : total = people * 1.80; << this ternary attempt failed, not sure what i did wrong
}
//console.log(total);
if(total > budget){ //I lay out three different conditions. For a past the budget total, a close the budget total, and a below the budget total
    alert("Hey intern, you've passed the budget that you set. Your total is " + total + " dollars. You may want to consider changing up your order a bit.");

}else if(total > budget - 15 && total <= budget){
    alert("Woo, you got everything you wanted and within budget range. Your total is " + total + " dollars. I'm sure your office mates will appreciate your efforts! ");
}else if( total <= budget - 15){
    alert("Intern you made it way under budget! Excellent! You've only spent " + total +" dollars! You could probably treat yourself to something special with the extra funds. I mean why not right?")
}
 console.log(total); // I print the total to the console finally

