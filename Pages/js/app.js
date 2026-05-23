
document.addEventListener('DOMContentLoaded', function() {
    
    // nav
    function loadNavigation() {
        const navHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="digitalwork.html">Digital Work</a></li>
                    <li><a href="analoguework.html">Analogue Work</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        `;

        const header = document.querySelector('header');
        if (header) {
            header.insertAdjacentHTML('beforebegin', navHTML);
            console.log('Navigation added'); // Debug
        } else {
            console.log('Header not found');
        }
    }
    
    // toggle button
    function initThemeToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        
        if (!toggleButton) {
            console.log('Theme button not found');
            return;
        }
        
        function updateButtonText() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            toggleButton.textContent = isDarkMode ? 'Light' : 'Dark';
        }
        
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            updateButtonText();
            console.log('Theme toggled:', isDark ? 'dark' : 'light');
        }
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
        updateButtonText();
        
        toggleButton.addEventListener('click', toggleTheme);
    }
    
    loadNavigation();
    initThemeToggle();
});