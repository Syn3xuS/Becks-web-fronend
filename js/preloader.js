const preload = `
	<preloader>
			<img src="/media/PRELOADER_LOGO.gif" />
	</preloader>
`;

document.body.innerHTML += preload;
document.addEventListener("DOMContentLoaded", () => {
	const preloader = document.querySelector("preloader");
	setTimeout(() => {
		if (preloader) preloader.remove();
	}, 3000);
});
