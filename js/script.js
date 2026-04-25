const introName = document.getElementById("introName");
const introUnderline = document.getElementById("introUnderline");
const main = document.getElementById("main");
const intro = document.getElementById("intro");
const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const accentToggle = document.getElementById("accentToggle");
const themeLabel = document.getElementById("themeLabel");
const themeIcon = document.getElementById("themeIcon");
const accentLabel = document.getElementById("accentLabel");

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const contactSubmit = document.getElementById("contactSubmit");
const replyToField = document.getElementById("replyToField");

const nameText = "DISHANTH H.G";
const accentModes = [
  { key: "mint", label: "Mint" },
  { key: "ocean", label: "Ocean" },
  { key: "ember", label: "Ember" },
  { key: "lime", label: "Lime" }
];

function renderIntroName() {
  if (!introName) {
    return;
  }

  nameText.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${0.6 + index * 0.06}s`;
    introName.appendChild(span);
  });

  const underlineDelay = 0.6 + nameText.length * 0.06 + 0.2;
  window.setTimeout(() => {
    introUnderline?.classList.add("grow");
  }, underlineDelay * 1000);
}

function finishIntro() {
  if (!intro || !main) {
    return;
  }

  window.setTimeout(() => {
    intro.classList.add("exit");
    window.setTimeout(() => {
      intro.style.display = "none";
      main.classList.add("visible");
      initScrollReveal();
      initActiveNav();
    }, 800);
  }, 3800);
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => observer.observe(element));
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const updateActiveLink = () => {
    let current = "";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 180) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute("href")?.slice(1);
      link.classList.toggle("active", target === current);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink);
}

function setTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  if (theme === "dark") {
    themeLabel.textContent = "Light";
    themeIcon.textContent = "Theme";
    themeToggle.setAttribute("aria-label", "Switch to light theme");
  } else {
    themeLabel.textContent = "Dark";
    themeIcon.textContent = "Theme";
    themeToggle.setAttribute("aria-label", "Switch to dark theme");
  }
}

function setAccent(accent) {
  const match = accentModes.find((item) => item.key === accent) || accentModes[0];
  body.dataset.accent = match.key;
  localStorage.setItem("portfolio-accent", match.key);
  accentLabel.textContent = match.label;
}

function initThemeControls() {
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  const savedAccent = localStorage.getItem("portfolio-accent") || "mint";

  setTheme(savedTheme);
  setAccent(savedAccent);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  accentToggle?.addEventListener("click", () => {
    const currentIndex = accentModes.findIndex((item) => item.key === body.dataset.accent);
    const nextAccent = accentModes[(currentIndex + 1) % accentModes.length];
    setAccent(nextAccent.key);
  });
}

async function handleSubmit(event) {
  event.preventDefault();

  if (!contactForm || !contactSubmit || !formStatus) {
    return;
  }

  const formData = new FormData(contactForm);
  const emailValue = contactForm.querySelector("#email")?.value || "";
  if (replyToField) {
    replyToField.value = emailValue;
  }
  formData.set("_replyto", emailValue);
  formStatus.className = "form-status";
  formStatus.textContent = "Sending your message...";

  contactSubmit.disabled = true;
  contactSubmit.textContent = "Sending...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Unable to send message right now.");
    }

    contactForm.reset();
    formStatus.classList.add("success");
    formStatus.textContent = "Message sent successfully. It should arrive in dishanthmanju307@gmail.com.";
    contactSubmit.textContent = "Message Sent";
  } catch (error) {
    formStatus.classList.add("error");
    formStatus.textContent = "Message could not be sent right now. Please try again from the hosted site or email me directly.";
    contactSubmit.textContent = "Try Again";
  } finally {
    window.setTimeout(() => {
      contactSubmit.disabled = false;
      contactSubmit.textContent = "Send Message ->";
    }, 2500);
  }
}

function initForm() {
  contactForm?.addEventListener("submit", handleSubmit);
}

renderIntroName();
finishIntro();
initThemeControls();
initForm();
