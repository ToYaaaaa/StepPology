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

// kanan main page region
const buttons = document.querySelectorAll(".kanan .size .chart .region button");

buttons.forEach(button => {
    button.addEventListener("click", function(){ 
    buttons.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    }
    );}
);

// kanan main page size
const buttonss = document.querySelectorAll(".kanan .size .chart .sizeshoes button");

buttonss.forEach(button => {
    button.addEventListener("click", function(){ 
    buttonss.forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");
    }
    );}
);

// kanan main page quantity
const plus = document.getElementById("plus");
const number = document.getElementById("number");
const min = document.getElementById("min");

plus.addEventListener("click", ()=>{
    let curentvalue = parseInt(number.textContent);
    number.textContent = curentvalue + 1;
});

min.addEventListener("click", () => {
    let curentvalue = parseInt(number.textContent);
    number.textContent = curentvalue - 1;
    if(curentvalue < 1){
        number.textContent = curentvalue + 1;
    }
});