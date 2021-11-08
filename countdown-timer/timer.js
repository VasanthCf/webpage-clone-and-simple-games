"usestrict";
const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const minutes1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");

const timer = () => {
  future = new Date("jan 1, 2022");
  now = new Date();
  diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  let d = days;
  let h = hours - days * 24;
  let m = mins - hours * 60;
  let s = seconds - mins * 60;
  days1.textContent = d;
  hours1.textContent = h;
  minutes1.textContent = m;
  seconds1.textContent = s;
};
setInterval("timer()", 1000);

