let lang = "en";

document.getElementById("langBtn").onclick = function () {
  lang = lang === "en" ? "bn" : lang === "bn" ? "sv" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });

  this.textContent = lang.toUpperCase();
};
