let countdown = 10 * 60;
let label = document.querySelector(".js-stream-counter");

let streamCounter = setInterval(function () {
    if (countdown <= 0) {
        clearInterval(streamCounter);
        label.innerHTML = "NOW";
        label.classList.add("animated", "infinite", "pulse", "slow");
        return;
    }

    let minutes = Math.floor(countdown / 60);
    let seconds = countdown - minutes * 60;
    label.innerHTML = ((String(minutes).length <= 1) ? "0" : "") + minutes + ":" + ((String(seconds).length <= 1) ? "0" : "") + seconds;
    countdown -= 1;
}, 1000);
