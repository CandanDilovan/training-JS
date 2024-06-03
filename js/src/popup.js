const popr = document.getElementById("register");
const poprbox = document.getElementById("registration_container");
const pop = document.getElementById("login");
const popbox = document.getElementById("login_container");
const quitrbox = document.getElementById("oui");
const quitbox = document.getElementById("oui2");

popr.onclick = () => {
	poprbox.classList.add('on');
}

quitrbox.onclick = () => {
	poprbox.classList.remove('on');
}

pop.onclick = () => {
	popbox.classList.add('on');
}

quitbox.onclick = () => {
	popbox.classList.remove('on');
}
