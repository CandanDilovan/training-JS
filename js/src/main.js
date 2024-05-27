
let canevas = document.getElementById("canv");
let canvcont = canevas.getContext("2d");

let img = new Image();
img.src = "../js/img/raquette.jpg";

let x = 0;
let y = 0;


function main()
{
    
    document.addEventListener("keydown", faituntruc);
    const interid = setInterval(rien, 1000/60);
}

function faituntruc(key){

    console.log(key.code);
    if (key.code == "ArrowUp")
        y -= 10;
    else if (key.code == "ArrowDown")
        y += 10;
}


function rien(){
    console.log("infini");
    canvcont.clearRect(0, 0, canevas.clientWidth, canevas.clientHeight);
    canvcont.drawImage(img, x, y);
}

main();

