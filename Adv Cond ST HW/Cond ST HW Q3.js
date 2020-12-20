// Write a program, which reads a floating point number, which represents speed and prints information about it. If
// the speed is less than or equal to 10 print " slow ". If the speed is above 10 and up to 50 print " average ". If the speed
// is above 50 and up to 150 print " fast ". If the speed is above 150 and up to 1000 print " ultra fast ". If it's above 1000
// print " extremely fast ".

function speedInfo(speed){

    if(speed <= 10){
    console.log(`slow`);
    }else if(speed < 50){
    console.log(`average`);
    }else if(speed < 150){
        console.log(`fast`);
    }else if(speed < 1000){
        console.log(`ultra fat`);
    }else{
        console.log(`extremely fast`);
    }
}
speedInfo(8);
speedInfo(49.5);
speedInfo(126);
speedInfo(160);
speedInfo(3500);