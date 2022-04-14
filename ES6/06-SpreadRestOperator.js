let number=[67,345,345,345]





function multiply(i,j,k){
    console.log("The Multiplication Result is"+ (i*j*k));
}

const marks=[34,41,50,60];

multiply(...marks)

let arr1=["Welcome","Hello","World"];
let arr2=[...arr1]
console.log(arr2);

console.log("-----------------------------------------------------------------------------------------")

print("Country","India","Britan","United State Of America", "Russia");
function print(prefix, ...elements){
    elements.forEach(e=>console.log(`${prefix}:  ${e}`));
}
