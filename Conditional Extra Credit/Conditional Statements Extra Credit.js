function scholarship(income,gpa,minimumWage){

     var socialScholarship = 0.35 * minimumWage;
     var excellentScholarship = gpa * 25;
    
    if(income > minimumWage){
        console.log("You cannot get a scholarship");
    
    }else if(gpa > 4.5 && gpa < 5.5){

        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
        if(socialScholarship >= excellentScholarship){
            console.log(`You get a Social scholarship ${socialScholarship} BGN`);
        }else {
            console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
            }

    }else if(gpa > 5.5 && gpa < 6){

        if(excellentScholarship >= socialScholarship){
        console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`)
        }else {
        console.log(`You get a Social scholarship  ${socialScholarship} BGN`);
        }
    }


}
scholarship(480.00,4.6,450.00);
scholarship(300.00,5.65,420.00);
scholarship(310,5.8,350);