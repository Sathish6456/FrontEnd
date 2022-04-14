let array=[5,3,1,4,2];

function process(a,b){
    return a+b;
} 

function maxProcess(a,b){
    if(a>b) return a;
    else return b;
}

function minProcess(a,b){
    if(a<b) return a;
    else return b;
}

let sum=array.reduce(process);
let max=array.reduce(maxProcess);
let min=array.reduce(minProcess);

console.log(`The Total Sum is ${sum}');
console.log(`The Max is ${max}`);
console.log(`The Min is{min}`);