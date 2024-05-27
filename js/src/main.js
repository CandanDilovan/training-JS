
let canevas = document.getElementById("canv");
let canvcont = canevas.getContext("2d");

let img1 = new twix(0, 0, "../js/img/raquette.jpg");
let img2 = new twix(2040 - 61, 0, "../js/img/raquette.jpg");


function main()
{
    document.addEventListener("keydown", faituntruc);
    const interid = setInterval(rien, 1000/60);
}

function faituntruc(key){

    console.log(key.code);
    if (key.code == "ArrowUp")
    {
        if (img1.y - 10 >= 0)
            img1.y -= 10;
    }
    else if (key.code == "ArrowDown")
    {
        if (canevas.clientHeight >= img1.y + img1.img.height)
            img1.y += 10;
    }
}


function rien(){
    console.log("infini");
    canvcont.clearRect(0, 0, canevas.clientWidth, canevas.clientHeight);
    img1.drawing(canvcont);
    img2.drawing(canvcont);
}

main();

