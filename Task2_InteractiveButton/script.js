function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `.dark-theme { background-color: #121212; color: white; }`;
  document.head.append(style);
});