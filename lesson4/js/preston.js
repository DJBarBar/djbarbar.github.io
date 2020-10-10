function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}
const options = { dateStyle: "full" };
document.getElementById(
  "current-date"
).textContent = new Date().toLocaleDateString("en-US", options);
