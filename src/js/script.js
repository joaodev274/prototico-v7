const toggle = document.getElementById('menu-toggle');
const list = document.getElementById('list');

toggle.addEventListener('click', () => {
  const isOpen = list.classList.toggle('show');
  toggle.textContent = isOpen ? '✖' : '☰';
});

document.querySelectorAll('#list a').forEach(link => {
  link.addEventListener('click', () => {
    list.classList.remove('show');
    toggle.textContent = '☰';
  });
});


AOS.init()