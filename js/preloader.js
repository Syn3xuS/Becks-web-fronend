const preload = `
    <preloader>
        <img src="/media/PRELOADER_LOGO.gif" />
    </preloader>
`;

document.body.innerHTML += preload;
window.scrollTo(0, 0);
document.body.classList.add("stop-scroll");

function waitForAllContent() {
    return new Promise(resolve => {
        // Ждем загрузку DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', checkContent);
        } else {
            checkContent();
        }

        function checkContent() {
            const videos = Array.from(document.getElementsByTagName('video'));
            const images = Array.from(document.getElementsByTagName('img'));
            
            // Проверяем загрузку всех видео
            const videoPromises = videos.map(video => {
                if (video.readyState >= 4) return Promise.resolve();
                return new Promise(resolve => {
                    video.addEventListener('canplaythrough', resolve, { once: true });
                });
            });

            // Проверяем загрузку всех изображений
            const imagePromises = images.map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.addEventListener('load', resolve, { once: true });
                });
            });

            // Ждем загрузки всего контента
            Promise.all([...videoPromises, ...imagePromises])
                .then(() => {
                    setTimeout(resolve, 1000); // Минимальное время показа прелоадера
                });
        }
    });
}

waitForAllContent().then(() => {
    const preloader = document.querySelector("preloader");
    if (preloader) preloader.remove();
    document.body.classList.remove("stop-scroll");
});
