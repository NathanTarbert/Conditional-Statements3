function hotelRoom(month,numDays){
    var studioCost = 0;
    var studioMayOct = 50 * numDays;
    var studioMayOctSevenNight = 50 * numDays * 0.95;
    var studioMayOctFourteenNight = 50 * numDays * 0.70;
    var studioJuneSept = 75.20 * numDays;
    var studioJuneSeptFourteenNight = 75.20 * numDays * 0.80;
    var studioJulyAug = 76 * numDays;
   

    var aptCost = 0;
    var aptMayOct = 65 * numDays;
    var aptMayOctFourteenNight = 65 * numDays * 0.90;
    var aptJuneSept = 68.70 * numDays;
    var aptJuneSeptFourteenNight = 68.70 * numDays * 0.90;
    var aptJulyAug = 77 * numDays;
    var aptJulyAugFourteenNight = 77 * numDays * 0.90;
    

    if(month == "May" || month == "October" ){
        var studioCost = studioMayOct;
        var aptCost = aptMayOct;
    }else if(month == "June" || month == "September" ){
        var studioCost = studioJuneSept;
        var aptCost = aptJuneSept;
    }else if(month == "July" || month == "August"){
        var studioCost = studioJulyAug;
        var aptCost = aptJulyAug;
    }
    if(numDays > 14 && month == "May" || month== "October"){
            var studioCost = studioMayOctFourteenNight;
        }else if(numDays < 7 && month == "May" || month== "October"){
            var studioCost = studioMayOctSevenNight;
        }else if(numDays > 14 && month == "June" || month== "September"){
            var studioCost = studioJuneSeptFourteenNight;

           }
    if(numDays > 14 && month == "May" || month == "October"){
            var aptCost = aptMayOctFourteenNight;
        }else if(numDays > 14 && month == "June" || month == "September"){
            var aptCost = aptJuneSeptFourteenNight;
        }else if((numDays > 14) && (month == "July" || month == "August")){
            var aptCost = aptJulyAugFourteenNight;
        }
        console.log(`Apartment: ${aptCost.toFixed(2)} lv.`);
        console.log(`Studio: ${studioCost.toFixed(2)} lv.`);
}

// hotelRoom("May",15);
// hotelRoom("June",14);
// hotelRoom("August",20);
hotelRoom("August",5);