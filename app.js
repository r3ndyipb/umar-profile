/**
 * Umar Syarif — Executive Portfolio Interaction Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation active tab switching
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function (e) {
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Subtle interactive parallax for circle backdrop only (portrait remains static)
  const heroStage = document.querySelector('.hero-stage');
  const circleBackdrop = document.querySelector('.circle-backdrop');

  if (heroStage && circleBackdrop) {
    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      circleBackdrop.style.transform = `translate(${x * 16}px, ${y * 14}px)`;
    });

    heroStage.addEventListener('mouseleave', () => {
      circleBackdrop.style.transform = 'translate(0px, 0px)';
    });
  }
});
