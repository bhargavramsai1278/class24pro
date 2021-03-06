class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options = {
		'density':2,
		'friction': 1.0,
		'restitution':0.4
	  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

            ellipseMode(RADIUS)
            ellipse(rubber.position.x,rubber.position.y,30);

            
			pop()
	}

}