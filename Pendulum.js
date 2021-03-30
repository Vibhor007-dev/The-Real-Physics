class Pendulum{
    constructor(x,y)
    {
        var options={
            'restitution':2,
            'friction':2,
            'density':1,
        }
        this.Body=Bodies.circle(x,y,30,options);
        this.width=30;
        this.height=20;
        
        World.add(world,this.Body);
    }
    display(){
        var pos=this.Body.position;
        var angle=this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(this.radius);
        fill("darkBlue");
        strokeWeight(4);
        stroke("black");

        ellipse(0,0,this.width,this.height);
        pop();
    }
}