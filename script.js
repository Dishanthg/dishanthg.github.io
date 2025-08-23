// Small enhancements: theme toggle, year, and mailto form
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle (dark by default)
const toggle = document.getElementById('themeToggle');
const prefers = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
const saved = localStorage.getItem('theme');
let theme = saved || 'dark';
document.documentElement.dataset.theme = theme;

toggle?.addEventListener('click', () => {
  theme = (theme === 'dark') ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
});

// Optional: light theme variables
const root = document.documentElement;
const applyLight = () => {
  root.style.setProperty('--bg', '#f8fafc');
  root.style.setProperty('--panel', '#ffffff');
  root.style.setProperty('--text', '#0f172a');
  root.style.setProperty('--muted', '#475569');
  root.style.setProperty('--accent', '#2563eb');
  root.style.setProperty('--ring', 'rgba(37,99,235,0.25)');
};
const applyDark = () => {
  root.style.setProperty('--bg', '#0b1220');
  root.style.setProperty('--panel', '#0f172a');
  root.style.setProperty('--text', '#e5e7eb');
  root.style.setProperty('--muted', '#94a3b8');
  root.style.setProperty('--accent', '#38bdf8');
  root.style.setProperty('--ring', 'rgba(56,189,248,0.45)');
};

const observeTheme = () => {
  const ob = new MutationObserver(() => {
    (document.documentElement.dataset.theme === 'light') ? applyLight() : applyDark();
  });
  ob.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  (document.documentElement.dataset.theme === 'light') ? applyLight() : applyDark();
};
observeTheme();

// Contact form: open mailto
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = encodeURIComponent(form.name.value);
  const email = encodeURIComponent(form.email.value);
  const msg = encodeURIComponent(form.message.value);
  const subject = `Portfolio message from ${decodeURIComponent(name)}`;
  const body = `Name: ${decodeURIComponent(name)}%0AEmail: ${decodeURIComponent(email)}%0A%0A${msg}`;
  window.location.href = `mailto:dishanthg66@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  form.reset();
  return false;
}
