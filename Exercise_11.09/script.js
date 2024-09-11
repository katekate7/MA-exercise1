// Знаходимо всі необхідні елементи
const menuToggle = document.getElementById('menuToggle'); // Елемент для відкриття/закриття мобільного меню
const menu = document.getElementById('menu'); // Меню, яке буде відкриватися/закриватися
const closeBtn = document.getElementById('closeBtn'); // Елемент для закриття меню (іконка хрестика)
const themeToggleMobile = document.getElementById('theme-toggle-mobile'); // Перемикач теми для мобільної версії
const themeToggleLarge = document.getElementById('theme-toggle'); // Перемикач теми для великого екрану

// Функція для відкриття/закриття мобільного меню
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Відкриття/закриття меню
});

// Функція для закриття меню по хрестику
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active'); // Закриття меню
});

// Функція перемикання теми (з темної на світлу і навпаки)
function toggleTheme() {
    document.body.classList.toggle('dark-theme'); // Додаємо або прибираємо клас для темної теми
    document.body.classList.toggle('light-theme'); // Додаємо або прибираємо клас для світлої теми

    // Додатково перемикаємо іконки сонця і місяця для мобільної та великої версій
    const sunIcon = document.querySelectorAll('.sun'); // Знаходимо всі іконки сонця
    const moonIcon = document.querySelectorAll('.moon'); // Знаходимо всі іконки місяця

    if (document.body.classList.contains('dark-theme')) {
        sunIcon.forEach(icon => icon.style.display = 'none'); // Ховаємо іконку сонця
        moonIcon.forEach(icon => icon.style.display = 'block'); // Показуємо іконку місяця
    } else {
        sunIcon.forEach(icon => icon.style.display = 'block'); // Показуємо іконку сонця
        moonIcon.forEach(icon => icon.style.display = 'none'); // Ховаємо іконку місяця
    }
}

// Події для перемикання теми на мобільних та великих екранах
themeToggleMobile.addEventListener('change', toggleTheme); // Перемикання теми для мобільної версії
themeToggleLarge.addEventListener('change', toggleTheme); // Перемикання теми для великого екрану
