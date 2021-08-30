var s1;

function setup() {
  createCanvas(400,400);
  fill ("white");
  s1 = new Student("Joy",13,8);
}

function draw() 
{
  background(30);

  text (s1.display(),200,200);
  
}