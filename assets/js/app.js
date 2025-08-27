/*Header-js-start*/
document.getElementById('navToggle').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('mainNav').classList.toggle('open');
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

// Custom Cursor//

    const cursor = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');

    document.addEventListener('mousemove', e => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
    });
    
// Custom Cursor//