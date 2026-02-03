// Mobile nav toggle and simple form handling
document.addEventListener('DOMContentLoaded',function(){
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click',function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){nav.style.display='flex'} else {nav.style.display='none'}
  });

  // Set year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Real form submit (POST to /api/contact)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      msg.style.color = '';
      msg.textContent = 'Verzenden… even geduld.';

      const data = {
        name: form.name?.value || '',
        contact: form.contact?.value || '',
        location: form.location?.value || '',
        message: form.message?.value || ''
      };

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const json = await res.json();
        if (res.ok) {
          msg.style.color = 'var(--accent)';
          msg.textContent = json.message || 'Bedankt! Wij nemen zo snel mogelijk contact met u op.';
          form.reset();
        } else {
          msg.style.color = 'crimson';
          msg.textContent = json.error || 'Er is iets misgegaan bij het verzenden.';
        }
      } catch (err) {
        msg.style.color = 'crimson';
        msg.textContent = 'Kan geen verbinding maken met de server.';
      }
    });
  }

  // ===== SCROLL ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-fade-in class
  document.querySelectorAll('.scroll-fade-in').forEach(el => {
    observer.observe(el);
  });

  // ===== COUNTER ANIMATIONS =====
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const animateCounters = () => {
    if (countersAnimated) return;
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
    
    countersAnimated = true;
  };

  // Observe trust badges section for counter animation
  const badgesSection = document.querySelector('.trust-badges');
  if (badgesSection) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(badgesSection);
  }
});