// Write a program, which reads hours and minutes from the 24-hour day and calculates what the time will be after
// 15 minutes . The result should be printed in the format hh:mm . The hours will always be between 0 and 23 , the
// minutes will always be between 0 and 59. The hours will be written with one or two digits , whereas the minutes will
// be written always with two digits (with a leading zero if necessary).



function timePlusFifteenMinutes(hours,minutes){
 
    newMinutes = minutes + 15;
    newHours = hours;
    if(newMinutes > 59){
        newMinutes = newMinutes - 60;
        newHours = newHours + 1;
        if(newMinutes < 9){
            newMinutes = "0" + newMinutes;
        }
    }    
    if(newHours > 23){
    newHours = 00;
    
}
    console.log(`${newHours}:${newMinutes}`);

}
 
timePlusFifteenMinutes(1,46);
timePlusFifteenMinutes(0,01);
timePlusFifteenMinutes(23,59);
timePlusFifteenMinutes(11,08);
timePlusFifteenMinutes(12,49);