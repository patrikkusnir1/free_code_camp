document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".form-outer form");
  const pages = document.querySelectorAll(".page");
  const nextBtns = document.querySelectorAll(".next");
  const prevBtns = document.querySelectorAll(".prev");
  const progressText = document.querySelectorAll(".step p");
  const progressCheck = document.querySelectorAll(".step .check");
  const bullets = document.querySelectorAll(".step .bullet");
  let current = 0;

  function updateProgress() {
    bullets.forEach((bullet, idx) => {
      if (idx < current) {
        bullet.classList.add("active");
        progressCheck[idx].classList.add("active");
        progressText[idx].classList.add("active");
        bullet.innerHTML = '<i class="fas fa-check"></i>'; // add icon
      } else {
        bullet.classList.remove("active");
        progressCheck[idx].classList.remove("active");
        progressText[idx].classList.remove("active");
        bullet.innerHTML = `<span>${idx + 1}</span>`; // add number back
      }
    });
  }

  function moveToPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= pages.length) return;

    current = pageIndex;
    slideContainer.style.transform = `translateX(-${
      pageIndex * (700 / pages.length)
    }%)`;
    updateProgress();
  }

  // next buttons
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      moveToPage(current + 1);
    });
  });

  // prev buttons
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      moveToPage(current - 1);
    });
  });

  updateProgress();
});
