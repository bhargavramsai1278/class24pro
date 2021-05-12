class Stone{
	constructor(x,y,r)
	{

	var options = {
		'density':2,
		'friction': 1.0,
		'restitution':0.4
	  };
		
		this.body=Bodies.square(x, y,20, 20, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkgreen");
            pop()
	}

}