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

	resetballs()
	{
		if (this.x < 0 || this.x > 2040)
		{
			this.x = 1020;
			this.y = 540;
			if (this.dirx > 0)
				this.dirx = -10;
			else if (this.dirx < 0)
				this.dirx = 10
		}
	}

	hit()
	{
		if (this.dirx > 0)
		{
			console.log(img2.y);
			console.log(img2.y + 473)
			if (this.x + this.dirx > img2.x
				&& (this.y > img2.y && this.y < img2.y + 473))
				this.dirx = -10;
		}
		if (this.dirx < 0)
		{
			if (this.x + this.dirx < img1.x + 61
				&& (this.y > img1.y && this.y < img1.y + 473))
				this.dirx = 10;
		}
	}
	
	move()
	{
		this.resetballs();
		this.hit();
		this.x += this.dirx;
	}
}