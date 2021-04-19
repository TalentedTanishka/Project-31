class Plinko
{    
    constructor(x,y)
    {
        var options = {
            isStatic: true,
            restitution : 0,
            friction : 0,
            density : 0.8 
        }
     
      this.body = Bodies.circle(x,y, 10,options);
      this.radius = 10;
      World.add(world , this.body)
      
    }

    display()
    {
        var pos =this.body.position
        push();
        fill("white")
        ellipse(pos.x , pos.y , this.radius)
        pop();
    }
}