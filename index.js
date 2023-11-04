function dislay() {
  let newDate = new Date();

  let hrs = newDate.getHours().toString().padStart(2, "0");
  let min = newDate.getMinutes().toString().padStart(2, "0");
  let sec = newDate.getSeconds().toString().padStart(2, "0");
  let sess = document.getElementById("session");

  if (hrs > 12) hrs = hrs - 12;
  else hrs;

  if (hrs > 12) sess.innerHTML = "PM";
  else sess.innerHTML = "AM";

  document.getElementById("hours").innerText = hrs;
  document.getElementById("minutes").innerText = min;
  document.getElementById("seconds").innerText = sec;
}
setInterval(dislay, 10);
