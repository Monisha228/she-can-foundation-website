const counters = document.querySelectorAll(".impact-item-number");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.dataset.target;
        let count = 0;
        const speed = 80;

        const updateCounter = () => {
          const increment = Math.ceil(target / speed);

          if (count < target) {
            count += increment;
            counter.innerText = count + "+";
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + "+";
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => observer.observe(counter));
