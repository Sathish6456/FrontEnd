function Student(r,n,m1,m2,m3) {
    this.rollno=r;
    this.name=n;
    this.marks1=m1;
    this.marks2=m2;
    this.marks3=m3;

    this.computeTotalMarks=()=>this.marks1+this.marks2+this.marks3;
    this.averageMarks=()=>{
        return this.computeTotalMarks()/3;

    }
}
var s1=new Student(1,"sathish",10,20,30)
console.log(s1.computeTotalMarks())
console.log(s1.averageMarks())
