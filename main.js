// HAMBURGER MENU

const toggle = document.querySelector(".nav__toggle--js");
const navMenu = document.querySelector(".nav__menu--js");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("toggleX");
  navMenu.classList.toggle("show-menu");
});

//close hamburger menu after click links
const theLinks = document.querySelectorAll(".nav__item");
theLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    toggle.classList.remove("toggleX");
  })
);

// Add background header after scroll
const scrollHeader = function () {
  const header = document.getElementById("header");

  if (this.scrollY >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader);

// Active link in menu
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// MODAL
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// FORM ACTION
// access to necessary variables

const form = document.querySelector(".form");

const firstNField = document.querySelector(".first-name");
const firstNInput = firstNField.querySelector("input");

const lastNField = document.querySelector(".last-name");
const lastNInput = lastNField.querySelector("input");

const emailField = document.querySelector(".email");
const emailInput = emailField.querySelector("input");

const passwordField = document.querySelector(".password");
const passwordInput = passwordField.querySelector("input");

// form - many actions after wrong filling - empty inputs

form.onsubmit = (event) => {
  event.preventDefault();

  if (firstNInput.value == "") {
    firstNField.classList.add("shake", "error");
  }
  if (lastNInput.value == "") {
    lastNField.classList.add("shake", "error");
  }
  if (passwordInput.value == "") {
    passwordField.classList.add("shake", "error");
  }
  if (emailInput.value == "") {
    emailField.classList.add("shake", "error");
  } else {
    checkEmail();
  }
  // After 400ms there will be a shake effect again, when inputs still fill wrong
  setTimeout(() => {
    firstNField.classList.remove("shake");
    lastNField.classList.remove("shake");
    emailField.classList.remove("shake");
    passwordField.classList.remove("shake");
  }, 400);

  //   email verification

  function checkEmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(pattern)) {
      emailField.classList.add("error");
      let errorTxt = emailField.querySelector(".error-text");
      if (emailInput.value != "") {
        errorTxt.innerText = "Looks like this is not an email";
        emailField.classList.add("shake");
      } else {
        errorTxt.innerText = "Enter a valid email address";
      }
    } else {
      emailField.classList.remove("error");
    }
  }

  firstNInput.onkeyup = () => {
    if (firstNInput.value == "") {
      firstNField.classList.add("error");
    } else {
      firstNField.classList.remove("error");
    }
  };

  lastNInput.onkeyup = () => {
    if (lastNInput.value == "") {
      lastNField.classList.add("error");
    } else {
      lastNField.classList.remove("error");
    }
  };

  emailInput.onkeyup = () => {
    checkEmail();
  };

  passwordInput.onkeyup = () => {
    if (passwordInput.value == "") {
      passwordField.classList.add("error");
    } else {
      passwordField.classList.remove("error");
    }
  };
  // validation when the form will be sent
  if (
    !firstNField.classList.contains("error") &&
    !lastNField.classList.contains("error") &&
    !emailField.classList.contains("error") &&
    !passwordField.classList.contains("error")
  ) {
    window.location.href = "#";
    console.log("Form SUBMITTED");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

// Animation JS Scroll Reveal

const animationReveal = ScrollReveal({
  origin: "right",
  distance: "30px",
  duration: 2000,
  reset: true,
});

animationReveal.reveal(`.about`, {
  interval: 200,
});
animationReveal.reveal(`.oferts__title`, { origin: "top" });

const jumpText = ScrollReveal({
  duration: 1000,
});

jumpText.reveal(`.bx-lock-open-alt`);
jumpText.reveal(`.bx-credit-card-alt`, { delay: 500 });
jumpText.reveal(`.bx-user `, { delay: 1250 });

const linksNavigation = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: false,
  mobile: false,
});

// linksNavigation.reveal(`.nav__list--primary`);
linksNavigation.reveal(`.nav__list`, { delay: 500 });
