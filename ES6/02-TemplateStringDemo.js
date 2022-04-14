const name="Raju";
const age=30;

console.log(`My name is ${name} and my age is ${age}`)


let student={
    name:"Sathish",
    email:"marrelasathish@gmail.com",

    sayDetails:function () {
        console.log(`The Student Name is ${this.name} and his E-Mail Id ${this.email}`)
        
    }
}

student.sayDetails()    