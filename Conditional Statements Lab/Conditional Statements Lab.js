

function guessPassword(password){
 
    if(password == "s3cr3t!"){

        console.log("Welcome");
    } else {
        console.log("Wrond password!");
    }
}
guessPassword("s3cr3t!");
guessPassword("qwerty");

function boilingWater(number){
    
    if(number > 100){
        console.log("The water is boiling");
    } else {
        console.log("The water is not hot enough");
    }
}

boilingWater(104.9);
boilingWater(29);

function speed(number){

    if(number <= 30){
        console.log("Slow");
    } else if(number > 30) {
        console.log("Fast");
    }
}

speed(30);
speed(60);


function areaOFFigures(shape,size){

    var square = size * size;
    var circle = 3.14159 * (size * size);
    if(shape == "square"){

        console.log(square.toFixed(2));
    }else if(shape == "circle") {
        console.log(circle.toFixed(2));
    }
}

areaOFFigures("square",5);
areaOFFigures("circle",3);

function ticketPrice(ticketType){

    let student = 1.60;
    let regular = 1.00;
    let special = "Invalid ticket type!";

    if(ticketType == "student"){
        console.log(`$${student.toFixed(2)}`);
    }else if(ticketType == "regular"){
        console.log(`$${regular.toFixed(2)}`);
    }else if(ticketType == "special"){
        console.log(special);
    }
}
    ticketPrice("student");
    ticketPrice("regular");
    ticketPrice("special");

function coffeeShop(drink,extra){
var price = 0.00;

    if(drink == "coffee"){
    var price = 1.00;
    }else if(drink == "tea"){
    var price = 0.60;
    }
    
    if(extra == "sugar"){
    price = price + 0.40;
    }
     console.log(`Final Price: $${price.toFixed(2)}`);
}

coffeeShop("coffee","sugar");
coffeeShop("tea","no");

function validTriangle(sideOne,sideTwo,sideThree){

    var triangle = false;

    if(sideOne < (sideTwo + sideThree)){

        console.log("Valid Triangle");
    }else if(sideTwo < (sideOne + sideThree)){
        console.log("Valid Traingle");
    }else if(sideThree < (sideOne + sideTwo)){
        console.log("Invalid Triangle");
    }else{
        console.log(`Invalid Triangle`);
    }
    
} 

validTriangle(3,4,5);
validTriangle(8,4,3);
validTriangle(5,12,6);


function main(){



}
main();