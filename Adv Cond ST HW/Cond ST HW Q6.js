// A group of dancers is rehearsing for a final contest. They must learn new choreography . The dance consists of N
// steps , which are being distributed between the dancers . The whole choreography must be learned for a certain
// number of days . All dancers can memorize no more than 13% of the total steps per day . Write a program, which
// calculates whether the dancers are going to manage to memorize the new dance and what percent of the steps
// should each dancer memorize .
// When calculating the percent of steps per day, round the number to the bigger integer.
// 1. Number of steps - an integer in the range [1 … 100 000]
// 2. Number of dancers - an integer in the range [1 … 50]
// 3. Number of days to rehearse – an integer in the range [1 … 31]

function Choreography(numSteps,numDancers,NumDays){

    let stepsPerDay = Math.ceil(((numSteps / NumDays) / numSteps) * 100);
    let percentOfSteps = (stepsPerDay / numDancers);
    
    if(stepsPerDay <= 13){
        console.log(`Yes, they will succeed in that goal! ${percentOfSteps.toFixed(2)}%`);
    }else{
        console.log(`No, they will not succeed in that goal! Required ${percentOfSteps.toFixed(2)}% steps to be learned per day. `);
    }

}
Choreography(10464,20,20);
Choreography(55555,30,7);
