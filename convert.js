var value = process.argv[2];
var sUnit = process.argv[3];
var stringTo = process.argv[4];
var tUnit = process.argv[5];

if((value > 0) && (sUnit == "m" || sUnit == "cm" || sUnit == "mm" || sUnit == "kg" || sUnit == "g") && (stringTo == "to") && (typeof(tUnit) == "string") && (process.argv.length == 6) && (tUnit == "m" || tUnit == "cm" || tUnit == "mm" || tUnit == "kg" || tUnit == "g")){
    if(((sUnit == "m") && (tUnit == "mm")) || (sUnit == "kg") && (tUnit == "g")){
        console.log(value + " " + sUnit + " are " + value *1000 + " " + tUnit);
    } else if(((sUnit == "mm") && (tUnit == "m")) || (sUnit == "g") && (tUnit == "kg")){
        console.log(value + " " + sUnit + " are " + value/1000 + " " + tUnit);
    } else if(((sUnit == "m") && (tUnit == "cm"))){
        console.log(value + " " + sUnit + " are " + value*100 + " " + tUnit);
    } else if(((sUnit == "cm") && (tUnit == "m"))){
        console.log(value + " " + sUnit + " are " + value/100 + " " + tUnit);
    } else if(((sUnit == "cm") && (tUnit == "mm"))){
        console.log(value + " " + sUnit + " are " + value*100 + " " + tUnit);
    }else if(((sUnit == "mm") && (tUnit == "cm"))){
        console.log(value + " " + sUnit + " are " + value/100 + " " + tUnit);
    }else if(sUnit == tUnit){
        console.log(value + " " + sUnit + " are " + value + " " + tUnit);
    }
}else{
    console.log("Invalid parameters");
}