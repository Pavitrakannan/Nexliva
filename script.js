```javascript
// =============================
// MOBILE MENU
// =============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// =============================
// HERO SLIDER
// =============================

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

  slides.forEach(slide =>
    slide.classList.remove("active")
  );

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;

  if (next >= slides.length) {
    next = 0;
  }

  showSlide(next);
}

setInterval(nextSlide, 5000);

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
  });
});


// =============================
// HERO FADE EFFECT
// =============================

slides.forEach(slide => {
  slide.style.opacity = "0";
  slide.style.transition = "opacity 1s ease";
});

if (slides.length) {
  slides[0].style.opacity = "1";
}

function updateSlides() {

  slides.forEach(slide => {
    slide.style.opacity = "0";
  });

  slides[currentSlide].style.opacity = "1";
}

function showSlide(index) {

  currentSlide = index;

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  dots[index].classList.add("active");

  updateSlides();
}

setInterval(() => {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 5000);


// =============================
// STATS COUNTER
// =============================

const counters = document.querySelectorAll(".stat-num");

const counterObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const counter = entry.target;

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = target / 80;

    const updateCounter = () => {

      current += increment;

      if (current < target) {

        counter.innerText = Math.ceil(current);

        requestAnimationFrame(updateCounter);

      } else {

        counter.innerText = target;
      }
    };

    updateCounter();

    counterObserver.unobserve(counter);

  });

}, {
  threshold: 0.5
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});


// =============================
// FAQ ACCORDION
// =============================

const faqButtons = document.querySelectorAll(".faq-q");

faqButtons.forEach(button => {

  button.addEventListener("click", () => {

    const item = button.parentElement;

    const answer = item.querySelector(".faq-a");

    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(faq => {

      faq.classList.remove("active");

      faq.querySelector(".faq-a").style.maxHeight = null;

      faq.querySelector(".faq-q span").textContent = "+";
    });

    if (!isOpen) {

      item.classList.add("active");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

      button.querySelector("span").textContent = "−";
    }
  });
});


// =============================
// FAQ INITIAL STATE
// =============================

document.querySelectorAll(".faq-a").forEach(answer => {

  answer.style.maxHeight = null;

  answer.style.overflow = "hidden";

  answer.style.transition =
    "max-height 0.35s ease";
});


// =============================
// GALLERY FILTER
// =============================

const filterBtns =
  document.querySelectorAll(".filter-btn");

const galleryItems =
  document.querySelectorAll(".gallery-item");

filterBtns.forEach(button => {

  button.addEventListener("click", () => {

    filterBtns.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter =
      button.dataset.filter;

    galleryItems.forEach(item => {

      if (
        filter === "all" ||
        item.dataset.cat === filter
      ) {

        item.style.display = "block";

      } else {

        item.style.display = "none";
      }
    });
  });
});


// =============================
// CONTACT FORM
// =============================

const contactForm =
  document.getElementById("contactForm");

const successMsg =
  document.getElementById("formSuccess");

if (contactForm) {

  contactForm.addEventListener("submit", e => {

    e.preventDefault();

    successMsg.style.display = "block";

    contactForm.reset();

    setTimeout(() => {

      successMsg.style.display = "none";

    }, 5000);
  });
}


// =============================
// NAVBAR SCROLL EFFECT
// =============================

const navbar =
  document.getElementById("mainNav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(255,255,255,0.98)";

    navbar.style.boxShadow =
      "0 8px 25px rgba(0,0,0,0.08)";

  } else {

    navbar.style.background =
      "rgba(255,255,255,0.95)";

    navbar.style.boxShadow = "none";
  }
});


// =============================
// SMOOTH REVEAL ANIMATION
// =============================

const revealElements =
  document.querySelectorAll(
    ".service-card, .why-card, .testi-card, .gallery-item"
  );

const revealObserver =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";

      entry.target.style.transform =
        "translateY(0)";
    }
  });

}, {
  threshold: 0.15
});

revealElements.forEach(el => {

  el.style.opacity = "0";

  el.style.transform =
    "translateY(40px)";

  el.style.transition =
    "all 0.6s ease";

  revealObserver.observe(el);
});
```
