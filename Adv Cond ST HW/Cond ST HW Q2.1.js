// You are given an integer , which represents a number of points . Bonus points are given by the rules below . Write a
// program, which calculates the bonus points for this number and the total number of points with the bonus.
// If the number is less than or equal to 100 , the bonus points are 5 .
// If the number is bigger than 100 and less than or equal to 1000 , the bonus points are 20% of the number.
// If the number is bigger than 1000 , the bonus points are 10% of the number.
// Additional bonus points (added after the previous ones):
// For an even number 􀀀 + 1 p.
// For a number ending in 5 􀀀 + 2 p.

const { toASCII } = require("punycode");

function bonusPoints(points){

    var totalPoints = 0;

    if(points <= 100){
        totalPoints = 5;
    }else if(points <= 1000){
        totalPoints = points * .20;
    }else{
        totalPoints = points * .10;
    }  
    

    if(points % 2 == 0){
        totalPoints = totalPoints + 1;
    }else if(points % 5 == 0){
        totalPoints = totalPoints + 2;
    }
    console.log(totalPoints);
    console.log(totalPoints + points);
}

bonusPoints(20);
bonusPoints(175);
bonusPoints(2703);
bonusPoints(15875);