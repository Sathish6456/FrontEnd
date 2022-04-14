var prices=[23.32,43.43,56.67,46.576,57.86,78.34,23.0,76.34];

function above50Finder(e){
    if(e>50) return true;
    else return false;

}

function below50Finder(e){
    if(e<50) return true;
    else return false;
}

var above50elements=prices.filter(above50Finder)
console.log(above50elements);

var below50elements=prices.filter(below50Finder)
console.log(below50elements);
