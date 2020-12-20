//You are given an integer , which represents a number of points . Bonus points are given by the rules below . Write a
// program, which calculates the bonus points for this number and the total number of points with the bonus.
// ● If the number is less than or equal to 100 , the bonus points are 5 .
// ● If the number is bigger than 100 and less than or equal to 1000 , the bonus points are 20% of the number.
// ● If the number is bigger than 1000 , the bonus points are 10% of the number.
// ● Additional bonus points (added after the previous ones):
// o For an even number 􀀀 + 1 p.
// o For a number ending in 5 􀀀 + 2 p.

function bonusPoints(number){
    
    let bonusPoints = 5;
    let evenNumber = 1;
    let endingInFive = 2;
    
    if(number < 100){
        number = number + bonusPoints;
    }else if(100 < 1000) {
        number = number * 0.20;
       
    }else if(number > 1000) {
        number = number * 0.10;
    }
    console.log(number);
    
    if(number = 2 % 4){
        number = number + evenNumber;
    }else if(5 % 7){
        number = number + endingInFive;}
        
    console.log(number);
}
bonusPoints(20);
bonusPoints(175);
bonusPoints(2703);
bonusPoints(15875);