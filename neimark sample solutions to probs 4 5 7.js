//===============================================
// 4. Metric Converter
// ==============================================

// Let's say this is the conversion table
// 1m = 1000mm
// 1m = 100cm
// 1m = 0.000621371192mi

function metricConverter(value, inputUnit, outputUnit) {
  // Since the conversion table is all about from meter(m),
  // it's easier to convert the value first to meters so we can convert it easily to whatever desired unit

  // if the input value is in mm then we can convert it to meters by dividing it by 1000
  if(inputUnit === 'mm') {
    value = value / 1000;
  }
  else if(inputUnit === 'cm') {
    value = value / 100;
  }
  else if(inputUnit === 'mi') {
    value = value / 0.000621371192;
  }

  // Now that the value is in meters, we can now easily convert it to desired unit

  // if the output is mm then we just simply multiply the value by 1000 since there's 1000mm in 1m
  if(outputUnit === 'mm') {
    value = value * 1000;
  }
  else if(outputUnit === 'cm') {
    value = value * 100;
  }
  else if(outputUnit === 'mi') {
    value = value * 0.000621371192;
  }

  // Finally, print your final value
  console.log(value.toFixed(8));
}



// ==============================================
// 5. Time + 15 Minutes
// ==============================================
function timePlus15Minutes(hours, mins) {

  // The goal is to add 15 minutes.
  // It's easier to convert the time to minutes first so we can add 15 minutes easily.
  // 1 hour has 60 minutes so if we multiply the hours by 60 we get the minutes and add it to the given minutes.
  let totalMinutes = parseInt(mins) + (parseInt(hours) * 60);

  // Add 15 minutes as the problem says
  totalMinutes = totalMinutes + 15;

  // Divide the total minutes by 60 to get the number of hours
  let newHours = Math.floor(totalMinutes / 60);

  // Get the remaining minutes without the hours
  let newMinutes = totalMinutes - (newHours * 60);

  // Make sure the new hour is not equal or more than 24
  if(newHours >= 24) {
    newHours = newHours - 24;
  }

  // Make sure the new minute has leading 0
  if(newMinutes < 10) {
    newMinutes = '0' + newMinutes;
  }

  // Finally, print the output
  console.log(newHours + ':' + newMinutes);
}



// ==============================================
// 7. Scholarship
// ==============================================
function scholarship(income, gpa, minimumWage) {

  // Social scholarship Amount
  let socialAmount = 0;

  // Scholarship for excellent performance Amount
  let excellentAmount = 0;


  //  The requirement for social scholarship are:
  //  family income less than the minimum wage and GPA of at least 4.5
  if(income < minimumWage && gpa >= 4.5) {

    //The social scholarship equals 35% of the minimum wage
    socialAmount = minimumWage * 0.35;
  }

  // The requirement for scholarship for excellent results is a GPA of at  least 5.5
  if(gpa >= 5.5) {

    // The amount of it equals the student's GPA multiplied by 25
    excellentAmount = gpa * 25;
  }

  // If he or she does qualify, print the scholarship which will have the bigger amount in their case.

  // If both scholarship amount is empty then there is no scholarship
  if(socialAmount === 0 && excellentAmount === 0) {
    console.log('You cannot get a scholarship!');
  }

  // else if social is greater than the excellent amount scholarship then the social scholarship will be given
  else if(socialAmount > excellentAmount) {
    console.log(`You get a Social scholarship ${socialAmount} BGN`);
  }

  // else the excellent scholarship will be given
  else  {
    console.log(`You get a scholarship for excellent results ${excellentAmount} BGN`);
  }
}
