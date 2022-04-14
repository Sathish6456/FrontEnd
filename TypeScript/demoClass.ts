class Account {
    //id:number;
    name:string
    age:number;
    constructor(private id:number, name:string, age:number) {       //these are instance variable
        //this.id=id;
       this.name=name;
       this.age=age;

    }
}
let ac:Account=new Account(1,"Sathish",23);
//console.log(ac.id);
console.log(ac.name);
