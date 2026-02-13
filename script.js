// Mobile navigation toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
}

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

// Waitlist form handler
function handleWaitlist(e) {
  e.preventDefault();
  const email = document.getElementById('waitlist-email');
  const form = document.querySelector('.waitlist-form');
  const success = document.getElementById('waitlist-success');

  if (email.value) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}

// Scroll-triggered animations using IntersectionObserver
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll(
    '.bar-card, .ingredient-card, .about-content, .about-visual, .story-step, .comparison-col, .comparison-divider, .ingredients-callout, .hero-stats, .section-header'
  );

  animateElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.7s ease ${(i % 6) * 0.08}s, transform 0.7s ease ${(i % 6) * 0.08}s`;
    observer.observe(el);
  });
});

// Add animate-in styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)';
    navbar.style.background = 'rgba(26, 51, 36, 0.95)';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.background = 'rgba(30, 61, 42, 0.9)';
  }
});

// Randomize food illustration float animations
document.querySelectorAll('.food-item').forEach(item => {
  const duration = 15 + Math.random() * 15;
  const delay = -Math.random() * 20;
  item.style.animationDuration = duration + 's';
  item.style.animationDelay = delay + 's';
});
