// Banden Service Op Locatie - JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  
  if (toggle) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if (nav) {
        nav.style.display = expanded ? 'none' : 'flex';
      }
    });
  }

  // Close menu when a link is clicked
  if (nav) {
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function () {
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.style.display = 'none';
        }
      });
    });
  }

  // Set year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Form handling
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      
      // Get form values
      const name = form.name?.value?.trim() || '';
      const phone = form.phone?.value?.trim() || '';
      const email = form.email?.value?.trim() || '';
      const location = form.location?.value?.trim() || '';
      const vehicle = form.vehicle?.value?.trim() || '';
      const message = form.message?.value?.trim() || '';
      
      // Validate
      if (!name || !phone || !location || !message) {
        showMessage('msg', 'Vul alstublieft alle verplichte velden in!', 'error');
        return;
      }
      
      // Show loading state
      showMessage('msg', 'Verzenden... even geduld.', 'loading');
      
      try {
        // Prepare data
        const data = {
          name,
          phone,
          email,
          location,
          vehicle,
          message,
          timestamp: new Date().toISOString()
        };
        
        // Send to server
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          showMessage('msg', '✓ Bedankt! Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op!', 'success');
          form.reset();
        } else {
          showMessage('msg', 'Er is iets misgegaan. Probeer alstublieft direct ons te bellen: +31657200120', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        showMessage('msg', 'Netwerkfout. Probeer direct ons te bellen: +31657200120', 'error');
      }
    });
  }

  // Helper function to show messages
  function showMessage(elementId, text, type) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = text;
      element.className = `form-msg ${type}`;
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Active navigation link highlighting
  function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || 
          (currentPage === '' && href === 'index.html') ||
          (currentPage === '/' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  setActiveNav();
});

// Fallback for older browsers or when JavaScript is disabled
window.addEventListener('load', function () {
  // Ensure footer year is set
  const yearEl = document.getElementById('year');
  if (yearEl && !yearEl.textContent) {
    yearEl.textContent = new Date().getFullYear();
  }
});

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
});