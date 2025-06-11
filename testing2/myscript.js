document.addEventListener('DOMContentLoaded', () => {
  
  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      const isActive = question.classList.contains('active');
      
      
      questions.forEach(q => {
        q.classList.remove('active');
        const icon = q.querySelector('.toggle-icon');
        const answer = q.nextElementSibling;
        if (icon) icon.textContent = '+';
        if (answer) answer.style.display = 'none';
      });

      
      if (!isActive) {
        question.classList.add('active');
        const icon = question.querySelector('.toggle-icon');
        const answer = question.nextElementSibling;
        if (icon) icon.textContent = '×';
        if (answer) answer.style.display = 'block';
      }
    });
  });

  
  const findBtn = document.getElementById('find');
  if (findBtn) {
    findBtn.addEventListener('click', () => {
      const target = document.querySelector('.services');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
