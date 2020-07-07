class DustBin{
    
    constructor(x , y){
		this.x = x ;
		this.y = y ;
		this.DustBinWidth = 200 ;
		this.DustBinHeight = 215 ;
		this.thickness = 15 ;

       this. btmline=Bodies.rectangle(this.x, this.y, this.DustBinWidth,this.thickness,{isStatic : true} );
	this.btmline.shapeColor = color(255,0,0);

	this.side1=Bodies.rectangle(this.x - this.DustBinWidth/2,this.y - this.DustBinHeight/2, this.thickness,this.DustBinHeight,{isStatic : true});
	this.side1.shapeColor = color(255,0,0);
	
	this.side2=Bodies.rectangle(this.x + this.DustBinWidth/2,this.y - this.DustBinHeight/2, this.thickness,this.DustBinHeight,{isStatic : true});
	this.side2.shapeColor = color(255,0,0);

	this.image =loadImage(".vscode/dustbingreen.png");

		World.add(world,this.btmline);
		World.add(world,this.side)
		World.add(world,this.side2)

    }

display(){

	var posBtm = this.btmline.position ;
	var posS1 = this.side1.position ;
	var posS2 = this.side2.position ;

	push ();
	translate(posS1.x,posS1.y);
	rectMode(CENTER);
	angleMode(RADIANS);
	fill();
	rotate(this.angle);
	pop();
    
}
}