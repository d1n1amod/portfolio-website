
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
        console.log('Navigation present');
    } else {
            console.log('Header not found');
        }
}

// toggle 
function initThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) { console.log('Button not found');
    return;
    }

    function updateButtonText() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.textContent = isDarkMode ? ' Light ' : ' Dark ';
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateButtonText()
        console.log('Theme button toggled');
    }

    updateButtonText();
    toggleButton.addEventListener('click', toggleTheme);
}

// lightbox
function initLightbox() {

    if (!document.body.classList.contains('work-page')) {
        console.log('Lightbox disabled on this page');
        return;
    }
    
    console.log('Lightbox present on this page');
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    
    if (!lightbox || !lightboxImg || !closeBtn) return;

    const images = document.querySelectorAll('.work-grid img');

    
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.classList.add('clickable-img')
        
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            ;
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxImg.src='';
    }

    closeBtn.addEventListener('click', closeLightbox);
    
}

// sorting
function initSorting() {
      if (!document.body.classList.contains('work-page')) {
        console.log('Sorting disabled on this page');
        return;
    }
    
    
    const sortOldestBtn = document.getElementById('sort-oldest');
    const sortNewestBtn = document.getElementById('sort-newest');
    const grid = document.getElementById('work-grid');
    
    if (!sortOldestBtn || !sortNewestBtn || !grid) 
    return;
    
    
    function sortOldest() {

        const figures = Array.from(grid.querySelectorAll('figure'));

        figures.sort((a, b) => {
            const yearA = parseInt(a.getAttribute('data-year'));
            const yearB = parseInt(b.getAttribute('data-year'));
            return yearA - yearB;
        });
        figures.forEach(figure => grid.appendChild(figure));
        console.log('Oldest being displaye first');
    }
    
    function sortNewest() {

        const figures = Array.from(grid.querySelectorAll('figure'));

        figures.sort((a, b) => {
            const yearA = parseInt(a.getAttribute('data-year'));
            const yearB = parseInt(b.getAttribute('data-year'));
            return yearB - yearA;
        });
        figures.forEach(figure => grid.appendChild(figure));
        console.log('Newest being displayed first');
    }
    
    sortOldestBtn.addEventListener('click', sortOldest);
    sortNewestBtn.addEventListener('click', sortNewest);
}

// run
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    loadNavigation();
    initThemeToggle();
    initLightbox();
    initSorting();
});