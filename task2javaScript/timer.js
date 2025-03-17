function startCounter(duration) {
    let timeLeft = duration; // в сек 

    const timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        console.log(`Осталось времени: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            console.log("Акция завершена!");
        }
    }, 1000);
}

startCounter(10 * 60); // Указываем в секундах. Т.Е 10 * 60 = 600 сек ( 10 мин)
