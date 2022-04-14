class Employee{
    constructor(n,a,b){
        this.name=n;
        this.age=a;
        this.basic=b;
    }

    computeAllowance() {
        return this.basic*0.35;
    }

    computeTotal() {
        return this.basic+this.computeAllowance();
    }
}

let e3=new Employee("Raju",25,5000)
console.log(e3);
console.log(e3.computeAllowance());
console.log(e3.computeTotal());
