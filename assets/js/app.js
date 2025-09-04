/*Header-js-start*/
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');

toggle.addEventListener('click', function() {
  this.classList.toggle('open');
  nav.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});
/*Header-js-end*/


/*Faq-js-start*/
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

/*Faq-js-start*/

