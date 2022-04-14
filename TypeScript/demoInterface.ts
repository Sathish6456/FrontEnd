interface Certified
{
   getExamName():string;
    
}
class Tester implements Certified{
    getExamName(): string {
        console.log("ISTQB");
        return "ISTQB";
        
    }

}

let t:Certified=new Tester();
t.getExamName();