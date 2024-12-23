const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
	menu.classList.toggle("active");
	menuToggle.classList.toggle("active");
	window.scrollTo(0, 0);
	document.body.classList.toggle("stop-scroll");
});
