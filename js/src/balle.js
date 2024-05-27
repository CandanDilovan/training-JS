class balle
{
	constructor(x, y, str){
		this.x = x;
		this.y = y;
		this.img = new Image();
		this.img.src = str;
		this.dirx = 10;
	}

	drawing(canvcont) 
	{
        canvcont.drawImage(this.img, this.x - 30, this.y - 30);
    }

	hit()
	{
		if (this.dirx > 0)
		{
			if (this.x + this.dirx > img2.x)
				this.dirx = -10;
		}
		if (this.dirx < 0)
		{
			if (this.x + this.dirx < img1.x + 61)
				this.dirx = 10;
		}
	}

	move()
	{
		this.hit();
		this.x += this.dirx;
	}
}