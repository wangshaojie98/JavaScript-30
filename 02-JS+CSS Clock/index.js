let secondDeg = 0;
let minDeg = 0;
let hourDeg = 0;
function initDate() {
  const date = new Date();
  const second = date.getSeconds();
  secondDeg = (second / 60) * 360;
  const min = date.getMinutes() + ((secondDeg / 60) / 60) * 360; // 1秒代表多少分格，一个分格代表多少度
  minDeg = (min / 60) * 360;
  const hour = date.getHours();
  hourDeg = (hour / 12) * 360 + ((min / 60) / 12) * 360 + (((second / 60) / 60) / 12) * 360; // 同上推理一个分格代表多少小时格
}

function updateDate() {
  secondDeg += (1 / 60) * 360;
  minDeg += ((1 / 60) / 60) * 360;
  hourDeg += (((1 / 60) / 60) / 60) * 360;

  changeStyle();
}

function changeStyle() {
  const secHand = document.querySelector('.second-hand');
  const minHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  secHand.style.transform = `rotate(${secondDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

initDate();
setInterval(updateDate, 1000);