const pop = document.querySelector(".register");
const popbox = document.querySelector(".registration_container");
const quitbox = document.querySelector(".oui");

pop.onclick = () => {
	registration_container.classList.add('on');
	ft_overlay()
}

quitbox.onclick = () => {
	registration_container.classList.remove('on');
	ft_overlay()
}

function ft_overlay()
{
	var over = document.getElementById('overlay');
	if (over.style.display == 'none')
		over.style.display = 'block';
	else if (over.style.display == 'block')
		over.style.display = 'none';
}