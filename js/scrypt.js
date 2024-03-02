const btnNavigation = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNavigation.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a:link");
links.forEach((el) => {
  el.addEventListener("click", () => {
    const href = el.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

    if (el.classList.contains("main-nav-link")) {
      headerElement.classList.toggle("nav-open");
    }
  });
});

const heroSection = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entrie = entries[0];

    if (!entrie.isIntersecting) {
      document.querySelector("body").classList.add("sticky");
    }
    if (entrie.isIntersecting) {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

document.addEventListener("click", (e) => {
  const imageBox = document.querySelector(".clicked-img-box");
  if (e.target.classList.contains("projects-img")) {
    imageBox.classList.remove("closed-img");
    imageBox.classList.add("open-img");
    const img = document.createElement("img");
    img.classList.add("clicked-img");
    img.src = e.target.src;
    imageBox.appendChild(img);
  }
  if (
    e.target.classList.contains("close-clicked-img") ||
    e.target.classList.contains("clicked-img-box")
  ) {
    imageBox.classList.remove("open-img");
    imageBox.classList.add("closed-img");
    imageBox.removeChild(imageBox.children[1]);
  }
});

observer.observe(heroSection);
