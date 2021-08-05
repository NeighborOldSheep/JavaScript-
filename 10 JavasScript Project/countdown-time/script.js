window.onload = function () {
    const daysEL = document.getElementById("days");
    const hoursE = document.getElementById("hours");
    const minsEl = document.getElementById("mins")
    const secondEl = document.getElementById("seconds");


    const newYears = '1 Jan 2022';

    function countdown() {
        const newYearDate = new Date(newYears);
        const currentDate = new Date();

        const totalSecond = (newYearDate - currentDate) / 1000;

        const days = Math.floor(totalSecond / 3600 / 24);
        const hours = Math.floor(totalSecond / 3600) % 24;
        const minutes = Math.floor(totalSecond / 60) % 60;
        const seconds = Math.floor(totalSecond) % 60;


        console.log(days, hours, minutes, seconds);

        daysEL.innerHTML = days;
        hoursE.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(minutes);
        secondEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    } 
 
 
    //initial call
    countdown()

    setInterval(countdown, 1000);
}



