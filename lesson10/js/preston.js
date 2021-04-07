function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

(function fridayBanner() {
  let d = new Date();
  const ban = document.querySelector(".prestonBanner");

  if (d.getDay() == 3) {
    ban.style.display = "block";
  } else {
    ban.style.display = "none";
  }
})();

WebFont.load({
  google: {
    families: ["Abril Fatface", "Poppins"],
  },
});

const options = {
  dateStyle: "full",
};
document.getElementById(
  "current-date"
).textContent = new Date().toLocaleDateString("en-US", options);
