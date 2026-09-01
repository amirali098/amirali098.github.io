const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('resume-theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

themeToggle?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  localStorage.setItem('resume-theme', next);
});

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
