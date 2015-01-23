alert("Okay intern, it's time to pick up coffee for the office.");
var people = Number(prompt("First we need to know how many people are in your office:"));
var budget = Number(prompt("How much are we looking to spend today?"));
var preference = prompt("Next we need to know what kind of caffeine we're buying, lattes or coffee:");
var total;

if(preference == "lattes" || preference == "Lattes" ){
    alert("Okay then, we're going with espresso. A 12oz latte would cost $3.10 for each person");
     total = people * 3.10;
    //console.log(total);

}else if(type = prompt("You can either buy this in bulk as a Coffee Traveler, which serves twelve 8oz. cups in a convenient 96oz. disposable thermos for $12.95," +
" or you can buy each person their own 12 oz cup of coffee for $1.80 each for a more personal touch \nPlease enter 'Traveler' or 'individual':")) {
    if (type == "traveler" || type == "Traveler") {
        people /= 12;
        //console.log(total);

        total = people * 12.95;
    } else total = people * 1.80;
}
//console.log(total);
if(total > budget){
    alert("Hey intern, you've passed the budget that you set. Your total is " + total + " dollars. You may want to consider changing up your oder a bit.");

}else if(total > budget - 15 && total <= budget){
    alert("Woo, you got everything you wanted and within budget range. Your total is " + total + " dollars. I'm sure your office mates will appreciate your efforts! ");
}else if( total <= budget - 15){
    alert("Intern you made it way under budget! Excellent! You've only spent " + total +" dollars! You could probably treat yourself to something special with the extra funds. I mean why not right?")
}
 console.log(total);

