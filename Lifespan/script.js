function CountDownLife() {
    const left_days = document.getElementById("days");
    const left_hours = document.getElementById("hours");
    const left_minutes = document.getElementById("minutes");
    const left_seconds = document.getElementById("seconds");

    const birthDate = new Date('2023-11-23'); // Your birthdate
    const lifeExpectancyYears = 82.06; // Average life expectancy in years

    function showRemainingLife() {
        const now = new Date();
        const endOfLife = new Date(birthDate);
        endOfLife.setFullYear(endOfLife.getFullYear() + lifeExpectancyYears);

        const timeRemaining = endOfLife - now; // Time left in milliseconds

        if (timeRemaining > 0) {
            const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
            const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
            const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);

            left_days.innerHTML = daysRemaining + "<br><span class=\"small\">days</span>";
            left_hours.innerHTML = hoursRemaining + "<br><span class=\"small\">hours</span>";
            left_minutes.innerHTML = minutesRemaining + "<br><span class=\"small\">mins</span>";
            left_seconds.innerHTML = secondsRemaining + "<br><span class=\"small\">secs</span>";
        } else {
            left_days.innerHTML = "0<br><span class=\"small\">days</span>";
            left_hours.innerHTML = "0<br><span class=\"small\">hours</span>";
            left_minutes.innerHTML = "0<br><span class=\"small\">mins</span>";
            left_seconds.innerHTML = "0<br><span class=\"small\">secs</span>";
        }
    }

    setInterval(showRemainingLife, 1000);
}

CountDownLife();
