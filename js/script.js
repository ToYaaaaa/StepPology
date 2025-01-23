// navbar
// navtime
function timer(){
    let timewrap = document.querySelector(".time");
    const now = new Date();

    let hours = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = minute < 10 ? "0" + second : second;

    timewrap.innerHTML = `${hours}H : ${minute}M : ${second}S`;
}

setInterval(timer, 1000);

timer();