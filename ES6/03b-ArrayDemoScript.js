var namesArray=['Mark','Edwin','Jhon','Raju','Devika'];
console.log(namesArray)

function convert(s) {
    return s.toUpperCase();
}

function convert1(a) {
    return a.toLowerCase();
}


var upperArray=namesArray.map(convert);
var lowerArray=namesArray.map(convert1)


console.log(upperArray)
console.log(lowerArray)

let prices=[2,3,4,6,8];

function f1(e) {
    return e*e;

}

var arr=prices.map(f1)
console.log(arr);
