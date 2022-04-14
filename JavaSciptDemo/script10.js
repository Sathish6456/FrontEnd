function add(a,b){
    if(typeof b=="undefined")
    b=0;
if(typeof a=="undefined")
    a=0;
    return a+b;
} 
var subtract=function(a,b){
    return a-b;
}
var multiply=(a,b)=>
{
    return a*b;
}

//console.log(add(10,20))
console.log(add(1,2,3,4,5,6))
console.log(subtract(10,5))
console.log(multiply(10,10))
