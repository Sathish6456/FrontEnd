//function clouser example

function doSomething(a) {
    console.log(a);

    function execute(i,j){
        console.log(i+j+a);            
    }
    return execute;
}

var f1=doSomething(10);
f1(20,30);

var f2=doSomething(100);
f2(1,2);

var f3=doSomething(300);
f3(10,11);

f1(9,8)