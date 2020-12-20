
// Write a program, which reads three numbers, which represent seconds (between 1 and 50) and sums them. Print
// the result in the format " minutes:seconds ". The seconds should be printed with a leading zero (2 􀀀 "02", 7 􀀀
// "07", 35 􀀀 "35").
// ● Sum the three numbers to get the total seconds.
// ● If the result is between 0 and 59, print 0 minutes + the seconds.
// ● If the result is between 60 and 119, print 1 minute + the seconds minus 60.
// ● If the result is between 120 and 179, print 2 minutes + the seconds minus 120.
// ● If the seconds are less than 10, print them with a leading zero.

function sumSeconds(num1,num2,num3){
 
    let number = num1 + num2 + num3;
    
    if(number <= 59){
        if(number < 10){
            console.log(`0:0${number}`);
        }else{
            console.log(`0:${number}`);
        }
        
    }else if(number <= 119) {
        if(number <= 69){
            console.log(`1:0${number - 60}`);
        }else{
            console.log(`1:${number - 60}`);
        }

    }else if(number <= 179){
        if(number <= 129){
            console.log(`2:0${number - 120}`);
        }else{
            console.log(`2:${number - 120}`);
        }
        
    }

}

sumSeconds(35,45,44);
sumSeconds(22,7,34);
sumSeconds(50,50,49);
sumSeconds(14,12,10);



// console.log((9).pad());