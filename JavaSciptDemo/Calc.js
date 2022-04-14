function Calculator (i,j){
    this.number1=i;
    this.number2=j;

    this.getSum=function() {
        return this.number1+this.number2;
    }
    this.getSubtract=function() {
        return this.number1-this.number2;
    }
    this.getMultiply=function() {
        return this.number1*this.number2;
    }
    this.getDivide=function() {
        return this.number1/this.number2;
    }
}