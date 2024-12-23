document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myGif');
    const section = document.querySelector('.text-center-video');
    let hasPlayed = false;
    let isPlaying = false;

    // Функция для полного воспроизведения видео
    const playFullVideo = () => {
        if (isPlaying) return Promise.resolve();
        
        isPlaying = true;
        return new Promise((resolve) => {
            video.play();
            video.addEventListener('ended', () => {
                isPlaying = false;
                resolve();
            }, { once: true });
        });
    };

    // Отслеживаем позицию скролла
    window.addEventListener('scroll', async () => {
        if (hasPlayed) return; // Если уже воспроизвели, больше не проверяем

        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Расчет процента прокрутки секции
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        const scrollPercent = Math.max(0, Math.min(100, 
            ((windowHeight - sectionTop) / (windowHeight + sectionHeight)) * 100
        ));
        
        console.log('Позиция в секции:', {
            'Верх секции от верха окна': Math.round(sectionTop),
            'Высота секции': Math.round(sectionHeight),
            'Высота окна': Math.round(windowHeight),
            'Процент прокрутки': Math.round(scrollPercent) + '%'
        });

        // Воспроизводим видео при достижении 40% прокрутки
        if (scrollPercent >= 40 && !hasPlayed) {
            video.classList.remove('hidden');
            hasPlayed = true;
            console.log('Запускаем воспроизведение');
            await playFullVideo();
        }
    });
});   
