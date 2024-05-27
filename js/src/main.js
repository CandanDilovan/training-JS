let canevas = document.getElementById("canv");
let canvcont = canevas.getContext("2d");

let img1 = new twix(0, 300, "../js/img/raquette.jpg");
let img2 = new twix(2040 - 61, 300, "../js/img/raquette.jpg");
let ballon = new balle(1020, 540, "../js/img/maltesers.png");


function main()
{
    document.addEventListener("keyup", lowkeyup);
    document.addEventListener("keydown", lowkeydown);
    const interid = setInterval(rien, 1000/60);
}

function lowkeydown(key){

    console.log(key.code);
    if (key.code == "ArrowUp")
        img2.up = true;
    else if (key.code == "ArrowDown")
        img2.down = true;
    if (key.code == "KeyW")
        img1.up = true;
    else if (key.code == "KeyS")
        img1.down = true;
}

function lowkeyup(key){

    console.log(key.code);
    if (key.code == "ArrowUp")
        img2.up = false;
    else if (key.code == "ArrowDown")
        img2.down = false;
    if (key.code == "KeyW")
        img1.up = false;
    else if (key.code == "KeyS")
        img1.down = false;
}


function rien()
{
    img1.moving();
    img2.moving();
    ballon.move()
    canvcont.clearRect(0, 0, canevas.clientWidth, canevas.clientHeight);
    img1.drawing(canvcont);
    img2.drawing(canvcont);
    ballon.drawing(canvcont);
}

main();

