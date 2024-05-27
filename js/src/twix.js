class twix
{
    constructor(x, y, str)
    {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = str;
    };

    drawing(canvcont) 
    {
        console.log(this.img.width)
        canvcont.drawImage(this.img, this.x, this.y);
    }

}