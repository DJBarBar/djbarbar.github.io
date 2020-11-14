function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
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
