const menuToggle = document.getElementById('menuToggle'); 
const menu = document.getElementById('menu'); 
const closeBtn = document.getElementById('closeBtn'); 
const themeToggleMobile = document.getElementById('theme-toggle-mobile'); 
const themeToggleLarge = document.getElementById('theme-toggle'); 


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); 
});


closeBtn.addEventListener('click', () => {
    menu.classList.remove('active'); 
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme'); 
    document.body.classList.toggle('light-theme'); 


    const sunIcon = document.querySelectorAll('.sun'); 
    const moonIcon = document.querySelectorAll('.moon'); 

    if (document.body.classList.contains('dark-theme')) {
        sunIcon.forEach(icon => icon.style.display = 'none'); 
        moonIcon.forEach(icon => icon.style.display = 'block'); 
    } else {
        sunIcon.forEach(icon => icon.style.display = 'block'); 
        moonIcon.forEach(icon => icon.style.display = 'none'); 
    }
}

themeToggleMobile.addEventListener('change', toggleTheme); 
themeToggleLarge.addEventListener('change', toggleTheme); 
