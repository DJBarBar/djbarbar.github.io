window.onload = function windChill() {
  let temp = parseFloat(document.getElementById("currTemp").textContent);
  let speed = parseFloat(document.getElementById("windSpeed").textContent);
  let output = "N/A";
  if (temp <= 50 && speed >= 3) {
    let f =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * (temp * Math.pow(speed, 0.16));
    output = Math.round(f);
  }
  document.getElementById("chill").innerHTML = output + " &#8457;";
};
