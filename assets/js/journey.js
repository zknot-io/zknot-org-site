/* ============================================================
   ZKNOT.ORG /journey/
   Minimal vanilla JS — chapter reveal, choices, progress.
   No frameworks. No tracking. No bundlers.
   ============================================================ */

(function () {
  'use strict';

  // ----- Chapter reveal via IntersectionObserver -----
  const chapters = document.querySelectorAll('.chapter');
  const progressDots = document.querySelectorAll('.journey-progress-dot');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        const idx = parseInt(entry.target.dataset.chapter, 10);
        if (!isNaN(idx)) updateProgress(idx);
      }
    });
  }, { threshold: 0.35 });

  chapters.forEach((c) => observer.observe(c));

  // ----- Progress dots -----
  function updateProgress(activeIdx) {
    progressDots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i < activeIdx) dot.classList.add('visited');
      if (i === activeIdx) dot.classList.add('active');
    });
  }

  progressDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const target = document.querySelector(`[data-chapter="${i}"]`);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ----- Socratic choice handling -----
  // Each `.choice-group` has one `.response` sibling that reveals after any choice.
  document.querySelectorAll('.choice-group').forEach((group) => {
    const choices = group.querySelectorAll('.choice');
    const response = group.parentElement.querySelector('.response');

    choices.forEach((choice) => {
      choice.addEventListener('click', () => {
        choices.forEach((c) => {
          c.disabled = true;
          c.classList.remove('selected');
        });
        choice.classList.add('selected');
        if (response) response.classList.add('revealed');
      });
    });
  });

  // ----- Smooth advance buttons -----
  document.querySelectorAll('.advance').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSel = btn.dataset.target;
      if (!targetSel) return;
      const target = document.querySelector(targetSel);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ----- Hide masthead near top of title chapter (just an aesthetic touch) -----
  const masthead = document.querySelector('.journey-masthead');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (masthead) {
      if (y < 100) masthead.classList.add('hidden');
      else masthead.classList.remove('hidden');
    }
    lastY = y;
  }, { passive: true });

  // Initialize masthead hidden at the top
  if (masthead && window.scrollY < 100) masthead.classList.add('hidden');

  // ----- Physical button interaction (Chapter 5) -----
  document.querySelectorAll('.physical-button').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.add('pressed');
      const sibling = btn.parentElement.querySelector('.button-response');
      if (sibling) sibling.classList.add('revealed');
      setTimeout(() => btn.classList.remove('pressed'), 220);
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

})();
