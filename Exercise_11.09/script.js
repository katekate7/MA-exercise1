const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const themeToggle = document.getElementById('themeToggle');
const themeToggleLarge = document.getElementById('themeToggleLarge');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Відкриття/закриття меню
});

// Функція перемикання теми
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

// Подія для перемикання теми
themeToggle.addEventListener('click', toggleTheme);
// themeToggleLarge.addEventListener('click', toggleTheme);

const closeBtn = document.getElementById('closeBtn');

// Відкриття меню
menuToggle.addEventListener('click', () => {
    menu.classList.add('active'); // Відкриття меню
});

// Закриття меню по хрестику
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active'); // Закриття меню
});

const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});


