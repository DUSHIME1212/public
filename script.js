// Include the type.js library in your project

// Define the text array with different work roles
var textArray = ["I AM A UX/UI DESIGNER", "I AM A FULL-STACK DEVELOPER"];

var textIndex = 0;
var isDeleting = false;
var typingSpeed = 100; // Speed in milliseconds

function type() {
  var text = textArray[textIndex];
  var typewriter = document.getElementById("typewriter");

  if (isDeleting) {
    // Remove characters
    typewriter.textContent = text.substring(0, typewriter.textContent.length - 1);
  } else {
    // Add characters
    typewriter.textContent = text.substring(0, typewriter.textContent.length + 1);
  }

  // Set typing speed
  var speed = isDeleting ? typingSpeed / 2 : typingSpeed;

  if (!isDeleting && typewriter.textContent === text) {
    // Delay before deleting
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && typewriter.textContent === "") {
    // Move to next text
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.typewriter-effect').classList.remove('hidden');
      entry.target.querySelector('.typewriter-effect').classList.add('show');
    } else {
      entry.target.querySelector('.typewriter-effect').classList.remove('show');
      entry.target.querySelector('.typewriter-effect').classList.add('hidden');
    }
  });
}, {
  threshold: 0.5 // Observe when 50% of the element is visible
});

const sectionElements = document.querySelectorAll('.typewriter-section');
sectionElements.forEach((sectionElement) => {
  sectionElement.querySelector('.typewriter-effect').classList.add('hidden');
  observer.observe(sectionElement);
});




document.addEventListener('DOMContentLoaded', function () {
  // Check if an element is in the middle of the viewport
  function isElementInMiddleViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const middleViewport = windowHeight / 2;
    return rect.top <= middleViewport && rect.bottom >= middleViewport;
  }

  // Handle scroll event
  function handleScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(function (item) {
      if (isElementInMiddleViewport(item)) {
        item.classList.add('animate-timeline');
      } else {
        item.classList.remove('animate-timeline');
      }
    });
  }

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check on page load
  handleScroll();
});

// email
(function() {
  emailjs.init('YOUR_USER_ID'); // Replace YOUR_USER_ID with your actual EmailJS User ID

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    var formData = {
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      message: this.message.value
    };

    // Send email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then(function(response) {
        alert('Your message has been sent successfully!');
        // You can add additional code or redirect the user to a thank-you page here
      }, function(error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending your message. Please try again later.');
      });

    // Reset form fields
    this.reset();
  });
})();
