
class Student
{
   constructor(name,age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
   }
   display(){
       console.log(this.name + " " + this.age + " " + this.grade);
       //var d = createElement("h3",this.name + " " + this.age + " " + this.grade);
       fill("white");
       //d.position(200,200);
       //text (this.name + " " + this.age + " " + this.grade,200,200);
       return this.name + " " + this.age + " " + this.grade;
   }
}



