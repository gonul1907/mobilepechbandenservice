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

  // Fake form submit
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      msg.textContent = 'Verzenden… even geduld.';
      // simulate network delay
      setTimeout(()=>{
        msg.textContent = 'Bedankt! Wij nemen zo snel mogelijk contact met u op.';
        form.reset();
      },1200);
    });
  }
});