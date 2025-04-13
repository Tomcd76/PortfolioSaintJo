document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Vérifie le mode sauvegardé
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'dark') {
        body.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️';
    }
    
    // Gestion du clic
    darkModeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            darkModeToggle.textContent = '🌙';
            localStorage.setItem('darkMode', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            darkModeToggle.textContent = '☀️';
            localStorage.setItem('darkMode', 'dark');
        }
    });
});