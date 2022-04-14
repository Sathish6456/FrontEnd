var prices=[89.0,45.33,72.0,20.88,40.0]

/*for(i=0;i<prices.length;i++){
    console.log(prices[i]);
}*/

function printElement(element){
    console.log(element);
}

prices.forEach(printElement)

var names=["Mumbai","Delhi","Kolkata"];
names.forEach(printElement);

prices.forEach(function(element){
    console.log(element);
});

prices.forEach((element)=>{
    console.log(element);
}
)