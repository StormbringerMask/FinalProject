const dots = document.querySelectorAll(".timeline .dot");
const sections = document.querySelectorAll(".section");
const container = document.querySelector(".sections");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sections[index].scrollIntoView({ behavior: "smooth" });
    updateActiveDot(index);
  });
});

container.addEventListener("scroll", () => {
  const sectionHeights = Array.from(sections).map(section => section.offsetTop);
  const scrollPosition = container.scrollTop + container.clientHeight / 2;

  const activeIndex = sectionHeights.findIndex((height, index) => {
    return scrollPosition >= height && scrollPosition < (sectionHeights[index + 1] || Infinity);
  });

  updateActiveDot(activeIndex);
});

function updateActiveDot(activeIndex) {
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
