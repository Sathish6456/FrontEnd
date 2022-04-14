function add(a,b){
    console.log(a);
    console.log(b(2,3));
}

var a=100;

var f1=function(a,b) {
    return a*b;
}

var f2=function(a,b) {
    console.log(a/b);
}

add(a, (a,b)=> {
    console.log(a-b)
})