class Copper{
	constructor(x,y)
	{
		var options={
		'restitution':2,
		'friction':1,
		'density':8,
		}
		this.body=Bodies.rectangle(x,y,50,30,options);
		this.width=50;
		this.height=50;
		World.add(world,this.body);
	}
	display(){
		var pos=this.body.position;
		var angle=this.body.angle;
		push();
		translate(pos.x,pos.y);
		rotate(angle);
		fill("green");
		strokeWeight(4);
		stroke("black");

		rect(0,0,this.width,this.height);
		pop();
	}

}
