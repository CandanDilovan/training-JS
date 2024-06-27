let popr = document.getElementById("register");
let poprbox = document.getElementById("registration_container");

let pop = document.getElementById("login");
let popbox = document.getElementById("login_container");

let quitrbox = document.getElementById("Rclose");
let quitbox = document.getElementById("Lclose");


let loginform = document.getElementById("loginform");
let login = document.getElementById("loginsubmit");

let registerform = document.getElementById("registration");
let registersubmited = document.getElementById("registersubmit");

let canvdiv = document.getElementById("canv");

popr.addEventListener("mouseenter", (e) => {
	popr.id = "registerhover";
})

popr.addEventListener("mouseleave", (e) => {
	popr.id = "register";
})

popr.onclick = () => {
	poprbox.classList.add('on');
}

quitrbox.onclick = () => {
	poprbox.classList.remove('on');
	registerform.reset();
}

pop.onclick = () => {
	popbox.classList.add('on');
}

quitbox.onclick = () => {
	popbox.classList.remove('on');
}

loginform.addEventListener('submit', function(event){
	event.preventDefault();
	send_login_form(this);
	popbox.classList.remove('on');
});

registerform.addEventListener('submit', function(event){
	event.preventDefault();
	PageDisplay();
	poprbox.classList.remove('on');
});


login.onclick = () =>{
	//loginform.submit();
}

registersubmited.onclick = () => {
	//registerform.submit();
}
