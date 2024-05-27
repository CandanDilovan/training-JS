class twix
{
    constructor(x, y, str)
    {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = str;
        this.up = false;
        this.down = false
    }

    drawing(canvcont) 
    {
        canvcont.drawImage(this.img, this.x, this.y);
    }

    moving()
    {
        if (this.up == true)
        {
            if (this.y - 10 >= 0)
                this.y -= 10;
        }
        if (this.down == true)
        {
            if (canevas.clientHeight >= this.y + this.img.height)
                this.y += 10;
        }
    }
}