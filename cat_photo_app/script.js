// Random keyword combination
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "c") {
    alert("You have found an easter egg!");
  }
});

// Random Cat sound
document.getElementById("catImage").addEventListener("click", function () {
  let sounds = ["catSound1", "catSound2", "catSound3"];
  let randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  document.getElementById(randomSound).play();
});
// hidden message
function showHiddenMessage() {
  document.getElementById("footerMessage").style.display = "block";
}
function hideMessage() {
  document.getElementById("footerMessage").style.display = "none";
}

// rainbow background
document.body.addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

// loading screen
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loadingScreen").style.display = "none";
  }, 3000); // 3 seconds
});

//reverse text
document.getElementById("reverseText").addEventListener("click", function () {
  let text = this.textContent;
  this.textContent = text.split("").reverse().join("");
});

// cat animate parade
function animateParade() {
  let parade = document.getElementById("catParade");
  let width = parade.offsetWidth;
  parade.style.transition = "transform 10s linear";
  parade.style.transform = "translateX(-" + width + "px)";
  parade.style.display = "block";

  parade.addEventListener("transitionend", function () {
    parade.style.transition = "none";
    parade.style.transform = "translateX(100vw)";
    setTimeout(animateParade, 100);
  });
}

// window.addEventListener("load", function () {
//   animateParade();
// });

// confetti
document
  .getElementById("confettiButton")
  .addEventListener("click", function () {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
