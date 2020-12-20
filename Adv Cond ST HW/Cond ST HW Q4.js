// Write a program, which converts distance between the following 8 measuring units: m , mm , cm , mi , in , km , ft , yd .
// Use the table below:
// Input unit output unit
// 1 meter ( m ) 1000 millimeters ( mm )
// 1 meter ( m ) 100 centimeters ( cm )
// 1 meter ( m ) 0.000621371192 miles ( mi )
// 1 meter ( m ) 39.3700787 inches ( in )
// 1 meter ( m ) 0.001 kilometers ( km )
// 1 meter ( m ) 3.2808399 feet ( ft )
// 1 meter ( m ) 1.0936133 yards ( yd )
// The input consists of three lines:
// ● First line: number to convert – real number
// ● Second line: input unit - text
// ● Third line: output unit - text
// Print the result of converting the measurement units formatted to 10 decimal places .


function metricConverter(realNum,realInput,realOutPut){
 
    if(realInput === "mm") {
        realNum === realNum / 1000;
    }else if(realInput === "cm") {
        realNum = realNum / 100;
    }else if(realInput === "mi") {
        realNum = realNum / 0.000621371192;
    }else if(realInput === "in") {
        realNum = realNum / 39.3700787;
    }else if(realInput === "km") {
        realNum = realNum / 0.001;
    }else if(realInput === "ft"){
        realNum = realNum / 3.2808399;
    }else if(realInput === "yd"){
        realNum = realNum / 1.0936133;
    }

    if(realOutPut === 'mm') {
        realNum = realNum * 1000;
    }else if(realOutPut === "cm") {
        realNum = realNum * 100; 
    }else if(realOutPut === "mi") {
        realNum = realNum * 0.000621371192; 
    }else if(realOutPut === "in") {
        realNum = realNum * 39.3700787;         
    }else if(realOutPut === "km") {
        realNum = realNum * 0.001; 
    }else if(realOutPut === "ft") {
            realNum = realNum * 3.2808399; 
    }else if(realOutPut === "yd") {
        realNum = realNum * 3.2808399; 

    }

    

    console.log(realNum.toFixed(10));

}
 

        

metricConverter(12,"km","ft");
metricConverter(150,"mi","in");
metricConverter(450,"yd","km");
