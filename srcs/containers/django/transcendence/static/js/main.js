let canevas = document.getElementById("canv");
let canvcont = canevas.getContext("2d");

let fontsize = 80 / canevas.width;

let img1 = new racket(0, canevas.height / 2, "../static/js/images/raquetteR.png", 1000);
let img2 = new racket(canevas.width - 74, canevas.height / 2, "../static/js/images/raquetteL.png", 1000);
let ballon = new balle(canevas.width / 2, canevas.height / 2, "../static/js/images/maltesers.png", 500);

let oldtime = Date.now();
let ms;
let game_begin = 0;

const logoutbutton = document.getElementById("logoutest");
const logoutsubmit = document.getElementById("logout");

logoutbutton.addEventListener('submit', function(event){
	event.preventDefault();
})

async function logout()
{
    console.log('alo');
    try
    {
        let reponse = await fetch('logout_btn/', {
            method: 'GET',
        })
        if (!reponse.ok)
            throw new TypeError('Logout failed');
        document.getElementById('canv').remove();
        let newpage = await reponse.text();
        console.log(newpage);
        document.querySelector('body').innerHTML = newpage;
        PageDisplay();
    }
    catch (error)
    {
        console.log(error);
    }
}


logoutsubmit.onclick = () => {
    	logout();
}

function drawwin(img1, img2)
{
    let text;
    let actualfontsize = fontsize * canevas.width;
    canvcont.font = (actualfontsize) + "px serif";
    if (img1.score >= 3)
        text = "WINNER is player 1";
    else
        text = "WINNER is player 2";
    canvcont.fillStyle = "Black";
    canvcont.fillText(text, (canevas.width / 2.5), canevas.height / 2);
}

function drawscore()
{
    let actualfontsize = fontsize * canevas.width;
    canvcont.font = (actualfontsize) + "px serif";
    let text = img1.score;
    let text2 = img2.score;
    canvcont.fillStyle = "Black";
    canvcont.fillText(text, canevas.width / 4, actualfontsize);
    canvcont.fillText(text2, (canevas.width / 4) * 3, actualfontsize);
}

function lowkeydown(key){

    if (key.code == "ArrowUp")
        img2.up = true;
    else if (key.code == "ArrowDown")
        img2.down = true;
    if (key.code == "KeyW")
        img1.up = true;
    else if (key.code == "KeyS")
        img1.down = true;
    if (key.code == "Space" && (img1.score == 3 || img2.score == 3 || game_begin == 0))
    {
        game_begin = 2;
        reseting();
    }
}

function lowkeyup(key){

    if (key.code == "ArrowUp")
        img2.up = false;
    else if (key.code == "ArrowDown")
        img2.down = false;
    if (key.code == "KeyW")
        img1.up = false;
    else if (key.code == "KeyS")
        img1.down = false;
}


function infinite_game_loop()
{
    let newtime = Date.now();
    ms = (newtime - oldtime) / 1000;
    if (game_begin == 2)
        countdown(ms, newtime);
    else if (game_begin == 1)
    {
        oldtime = newtime;
        if (img1.score < 3 && img2.score < 3 && game_begin == 1)
        {

            img2.moving(ms);
            img1.moving(ms);
            ballon.move(ms);
            canvcont.clearRect(0, 0, canevas.width, canevas.height);
            ballon.drawing(canvcont);
            img2.drawing(canvcont);
            img1.drawing(canvcont);
        }
        else if (img1.score >= 3 || img2.score >= 3)
            drawwin(img1, img2);
        drawscore();
    }
    if (game_begin == 0)
            oldtime = newtime;
}

function reseting()
{
    ballon.x = canevas.width / 2;
    ballon.y = canevas.height / 2;
    img2.reset();
    ballon.resetballs();
    img1.reset();
}

function countdown(ms, newtime)
{
    let countdown;
    let actualfontsize = fontsize * canevas.width;
    if (ms < 4)
    {
        countdown = 3 - Math.floor(ms);
        canvcont.font = (actualfontsize * 3) + "px serif";
        canvcont.fillStyle = "Black";
        canvcont.clearRect(0, 0, canevas.width, canevas.height);
        ballon.drawing(canvcont);
        img2.drawing(canvcont);
        img1.drawing(canvcont);
        canvcont.fillText(countdown.toString(),(canevas.width / 2) - 40, (canevas.height / 2) + 40);
    }
    else
    {
        oldtime = newtime;
        game_begin = 1;
    }
}
function main()
{
    document.addEventListener("keyup", lowkeyup);
    document.addEventListener("keydown", lowkeydown);
    const interid = setInterval(infinite_game_loop, 1000/60);
}

main();
