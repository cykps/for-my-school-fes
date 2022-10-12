const inputEle = document.querySelector("#input");
const timerEle = document.querySelector("#timer");

let Timer = new Simple_Timer(timerEle, finish, 20, false, 'rgba(135, 206, 235, 0.8)');

function startStop() {
    console.log("start");
    if (!Timer.isDrowing()) {
        console.log("recest");
        Timer.start(Number(inputEle.value * 1000));
    } else {
        Timer.stop();
    }
}

function stop() {
    Timer.stop();
}

function finish() {
    document.getElementById('audio').play();
}