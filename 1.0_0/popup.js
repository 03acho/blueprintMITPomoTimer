window.onload = function () {
    var start = document.getElementById('start');
    var reset = document.getElementById('reset');
    var stop = document.getElementById('stop');
    var workMins = document.getElementById('workMin');
    var workSecs = document.getElementById('workSec');
    var breakMins = document.getElementById('breakMin');
    var breakSecs = document.getElementById('breakSec');
    var startTimer = null;

    start.addEventListener('click', function () {
        if (startTimer === null) {
            startTimer = setInterval(timer, 1000)
        } else {
            alert("Timer is running");
        }
    })

    reset.addEventListener('click', function () {
        workMins.innerText = 25;
        workSecs.innerText = "00";

        breakMins.innerText = 5;
        breakSecs.innerText = "00";

        document.getElementById('counter').innerText = 0;
        stopInterval();
        startTimer = null;
    })

    stop.addEventListener('click', function () {
        stopInterval();
        startTimer = null;
    })

    function timer() {
        console.log(workSecs.innerText);
        if (workSecs.innerText != 0) {
            workSecs.innerText--;
        } else if (workMins.innerText != 0 && workSecs.innerText == 0) {
            workSecs.innerText = 59;
            workMins.innerText--;
        }

        if (workMins.innerText == 0 && workSecs.innerText == 0) {
            if (breakSecs.innerText != 0) {
                breakSecs.innerText--;
            } else if (breakMins.innerText != 0 && breakSecs.innerText == 0) {
                breakSecs.innerText = 59;
                breakMins.innerText--;
            }
        }

        if (workMins.innerText == 0 && workSecs.innerText == 0 && breakMins.innerText == 0 && breakSecs == 0) {
            workMins.innerText = 25;
            workSecs.innerText = "00";

            breakMins.innerText = 5;
            breakSecs.innerText = "00";

            document.getElementById('counter').innerText++;
        }
    }

    function stopInterval() {
        clearInterval(startTimer);
    }
}