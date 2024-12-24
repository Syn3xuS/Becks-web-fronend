const preload = `
	<preloader>
			<img src="/media/PRELOADER_LOGO.gif" />
	</preloader>
`;

document.body.innerHTML += preload;
document.body.classList.toggle("stop-scroll");

document.addEventListener("DOMContentLoaded", () => {
	const preloader = document.querySelector("preloader");
	setTimeout(() => {
		if (preloader) preloader.remove();
		document.body.classList.toggle("stop-scroll");
	}, 3000);
});
