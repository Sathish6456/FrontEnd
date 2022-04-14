function Employee(a,b,c){
    this.id=a;
    this.name=b;
    this.salary=c;

    this.computeAllowance=()=>this.salary*0.30
    this.computeNetSalary=()=> {
        return this.salary+this.computeAllowance();
    }
}

var e1=new Employee(101,"Sathish",10000)
console.log(e1.computeAllowance())
console.log(e1.computeNetSalary())

var e2=new Employee(101,"Ram",20000)
console.log(e2.computeAllowance())
console.log(e2.computeNetSalary())