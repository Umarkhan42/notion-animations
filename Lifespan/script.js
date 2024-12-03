function CountDownLife() {
    const left_years = document.getElementById("years");
    const left_months = document.getElementById("months");
    const left_days = document.getElementById("days");
    const left_hours = document.getElementById("hours");
    const left_minutes = document.getElementById("minutes");
    const left_seconds = document.getElementById("seconds");

    const birthDate = new Date('2003-11-23'); // Your birthdate
    const lifeExpectancyYears = 82.06; // Average life expectancy in years

    function showRemainingLife() {
        const now = new Date();

        // Calculate the difference between the current date and birthdate
        const ageInMillis = now - birthDate;

        // Convert age in milliseconds to years, months, days, hours, minutes, and seconds
        const ageInSeconds = Math.floor(ageInMillis / 1000);
        const ageInMinutes = Math.floor(ageInSeconds / 60);
        const ageInHours = Math.floor(ageInMinutes / 60);
        const ageInDays = Math.floor(ageInHours / 24);
        const ageInYears = Math.floor(ageInDays / 365.25); // Account for leap years
        const ageInMonths = Math.floor((ageInDays % 365.25) / 30.42); // Approx months

        // Calculate remaining years, months, and days
        const yearsLeft = Math.floor(lifeExpectancyYears - ageInYears);
        const monthsLeft = Math.floor(12 - ageInMonths); // Remaining months in the current year
        const daysLeft = Math.floor((ageInDays % 30.42)); // Remaining days in the current month

        // Calculate the remaining hours, minutes, and seconds
        const remainingMillis = (lifeExpectancyYears * 365.25 * 24 * 60 * 60 * 1000) - ageInMillis;
        const remainingSeconds = Math.floor((remainingMillis / 1000) % 60);
        const remainingMinutes = Math.floor((remainingMillis / (1000 * 60)) % 60);
        const remainingHours = Math.floor((remainingMillis / (1000 * 60 * 60)) % 24);

        // Display the results
        left_years.innerHTML = yearsLeft + "<br><span class=\"small\">years</span>";
        left_months.innerHTML = monthsLeft + "<br><span class=\"small\">months</span>";
        left_days.innerHTML = daysLeft + "<br><span class=\"small\">days</span>";
        left_hours.innerHTML = remainingHours + "<br><span class=\"small\">hours</span>";
        left_minutes.innerHTML = remainingMinutes + "<br><span class=\"small\">mins</span>";
        left_seconds.innerHTML = remainingSeconds + "<br><span class=\"small\">secs</span>";
    }

    setInterval(showRemainingLife, 1000);
}

CountDownLife();
