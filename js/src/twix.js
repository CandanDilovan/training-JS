class twix
{
    constructor(x, y, str, speed)
    {
        this.x = x;
        this.y = y;
        this.height = 473;
        this.speed = speed;
        this.img = new Image();
        this.img.src = str;
        this.up = false;
        this.down = false
    }

    drawing(canvcont) 
    {
        canvcont.drawImage(this.img, this.x, this.y);
    }

    impact(ball)
    {
        let impact = (ball.y - this.y) - (this.height / 2)
        let normal = (impact / (this.height /2));
        console.log(normal);
        return (normal);
    }

    moving(ms)
    {
        if (this.up == true)
        {
            if (this.y - (this.speed * ms) >= 0)
                this.y -= this.speed * ms;
        }
        if (this.down == true)
        {
            if (canevas.clientHeight >= this.y + this.height + (this.speed * ms))
                this.y += this.speed * ms;
        }
    }
}