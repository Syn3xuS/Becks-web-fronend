const preload = `
	<preloader>
			<img src="/media/PRELOADER_LOGO.gif" />
	</preloader>
`;

document.body.innerHTML += preload;
window.scrollTo(0, 0);
document.body.classList.toggle("stop-scroll");

document.addEventListener("DOMContentLoaded", () => {
	const preloader = document.querySelector("preloader");
	setTimeout(() => {
		if (preloader) preloader.remove();
		document.body.classList.toggle("stop-scroll");
	}, 3000);
});
