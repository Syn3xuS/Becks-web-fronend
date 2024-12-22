document.addEventListener("DOMContentLoaded", () => {
	const gif = document.getElementById("myGif");
	let hasPlayed = false;

	window.addEventListener("scroll", () => {
		const gifOffsetTop = gif.offsetTop;
		const scrollY = window.scrollY + window.innerHeight;

		// Проверяем, виден ли GIF на экране
		if (scrollY > gifOffsetTop && !hasPlayed) {
			gif.classList.remove("hidden");
			gif.src = gif.src; // Перезапускаем GIF
			hasPlayed = true; // Устанавливаем флаг, чтобы не воспроизводить снова
		}
	});
});
