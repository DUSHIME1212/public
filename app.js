const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
        entry.target.classList.add('hidden');
      }
    });
  }, {
    threshold: 0.5 // Observe when 50% of the element is visible
  });
  
  const sectionElement = document.querySelector('.mainpage');
  sectionElement.classList.add('hidden');
  observer.observe(sectionElement);
  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('header');
    const lightSection = document.querySelector('.light-section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add('dark-navbar');
        } else {
          navbar.classList.remove('dark-navbar');
        }
      });
    });
  
    observer.observe(lightSection);
  });
  