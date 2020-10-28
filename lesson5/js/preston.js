function toggleMenu() {
  document.getElementsByClassName("navigate")[0].classList.toggle("responsive");
}

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("current-date").textContent = new Date().toLocaleString(
  "en-GB",
  options
);
