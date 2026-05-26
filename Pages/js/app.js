
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
    initLightbox();
});



// lightbox
function initLightbox() {
    
    if (!document.body.classList.contains('work-page')) {
        console.log('Lightbox disabled on this page');
        return;
    }
    
    console.log('Running lightbox on work page');
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    
    
    if (!lightbox || !lightboxImg || !closeBtn) {
        console.error('Lightbox elements not found in HTML');
        return;
    }
    
  
    const images = document.querySelectorAll('figure img');
    
    if (images.length === 0) {
        console.log('No images found on this page');
        return;
    }
    
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.classList.add('clickable-image');
        
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; 
        lightboxImg.src = '';
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
}

document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();   
    initThemeToggle();   
    initLightbox();      
});