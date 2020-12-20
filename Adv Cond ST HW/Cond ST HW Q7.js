// Ivan has decided to beat the world swimming record. You must read the record in seconds, which Ivan has to beat,
// the distance in meters, which he has to swim and the time in seconds per meter. Write a program, which
// calculates whether he will succeed , having in mind that the water resistance will slow him down with 12.5 seconds
// for every 15 meters he swims. Calculate the time in seconds , for which Ivan will swim the distance and the
// difference from the world record.
// When calculating Ivan's slowdown as a result of the water resistance, round the result to the smaller integer.
// Input
// The input consists of 3 lines :
// 1. The record in seconds - a real number in the range [0.00 … 100000.00]
// 2. The distance in meters - a real number in the range [0.00 … 100000.00]
// 3. The time in seconds per meter - a real number in the range [0.00 … 1000.00]
// Output
// What you print on the console depends on the result:
// ● If Ivan managed to beat the World Swimming Record , print:
// o " Yes, he succeeded! The new world record is { Ivan's time } seconds."
// ● If Ivan did NOT manage to beat the World Swimming Record , print:
// o "No, he failed! He was { the difference between his time and the record } seconds
// slower."
// The result should be formatted to two decimal places.

function swimRecord(swimSeconds,metersDistance,secondsPerMeter){

  let ivansTime = metersDistance * secondsPerMeter;
  let slowDown = Math.floor(metersDistance / 15) * 12.5;
  let time = ivansTime + slowDown;
  let totalTime = time - swimSeconds;

  if(totalTime > swimSeconds){
        console.log(`No, he failed! He was ${totalTime.toFixed(2)} seconds slower.` );
  }else{
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
  }
}
swimRecord(10464,1500,20);
swimRecord(55555.67,3017,5.03);