

// nav
function loadNavigation() {
    const navHTML = `
        <nav class= 'main-nav'>
            <ul class = 'page-links'>
                <li><a href="index.html"><img 
                src="./img/0C0FEB24-E50B-4F33-9C98-EB4E3A54CEFB.jpg" 
                alt="Home image" 
                class='nav-img'> HOME </a></li>

                <li><a href="about.html"><img 
                src="./img/IMG_9047.jpg" 
                alt="About image" 
                class='nav-img'> ABOUT </a></li>

                <li><a href="digitalwork.html"><img 
                src="./img/5745430D-7B45-4BD0-8063-492AC3974E72.jpg" 
                alt=" Digital Work image" 
                class='nav-img'> DIGITAL <br> WORK </a></li>

                <li><a href="analoguework.html"><img 
                src="./img/AE14A14D-DB13-4A22-BDCD-4BC8A4707386.jpg" 
                alt="Analogue Work Image" 
                class='nav-img'> ANALOGUE <br> WORK </a></li>

                <li><a href="contact.html"><img 
                src="./img/0665DF54-3FF0-4DD3-A327-4F7A408136EE.jpg" 
                alt="Contact Image" 
                class='nav-img'> CONTACT </a></li>
            </ul>
        </nav>
    `;

    const header = document.querySelector('header');

    const isHomePage = window.location.pathname === '/' || window.location.pathname.includes('index');

    
    
    if (header) 
    { if (isHomePage)
    { header.insertAdjacentHTML('afterend', navHTML);
        console.log('Navigation present');
    } 
    else { header.insertAdjacentHTML('beforebegin', navHTML);
        console.log('Navigation present');
    }
    }else {
        console.log('Header not found');
    }
}





// lightbox
function initLightbox() {
    if (!document.body.classList.contains('work-page')) {
        console.log('Lightbox disabled on this page');
        return;
    }

    console.log('Lightbox present on this page');



    const lightboxBack = document.createElement('div');
    lightboxBack.id = "lightboxBack";
    document.body.appendChild(lightboxBack);

    const images = document.querySelectorAll('.work-grid img');
    images.forEach(image => {image.addEventListener('click', e => {
            lightboxBack.classList.add('active');
            const lightboxImg = document.createElement('img');

            lightboxImg.src = image.src;
            lightboxImg.id = "lightboxImg";
            while (lightboxBack.firstChild) 
                { lightboxBack.removeChild(lightboxBack.firstChild);}
            lightboxBack.appendChild(lightboxImg);

        });
    });

    lightboxBack.addEventListener('click', e =>
        { lightboxBack.classList.remove('active');

    });
}

// sorting

function initSorting() {
    if (!document.body.classList.contains('work-page')) {
        console.log('Sorting disabled on this page');
        return;
    }

    const sortBtn = document.getElementById('sort-toggle');
    const grid = document.getElementById ('work-grid');


    let order = 'oldest'; 

    function sortFigures() { const figures = Array.from(grid.querySelectorAll('figure'));
        
        figures.sort((a, b) => {
            const yearA = parseInt(a.getAttribute('data-year'));
            const yearB = parseInt(b.getAttribute('data-year'));
            
            if (order === 'oldest') {return yearA - yearB; 
            } else {
                return yearB - yearA;}
        });
        
        figures.forEach(figure => grid.appendChild(figure));
        console.log("Sorting is working.");
        
        if (order ===' oldest') {sortBtn.textContent = 'NEWEST - OLDEST'
        } else {
            sortBtn.textContent = 'OLDEST - NEWEST'}
    }
    
    function toggleSort() {
        order = order === 'oldest' ? 'newest' : 'oldest';
        sortFigures();
    }

    sortBtn.addEventListener('click', toggleSort);

};



//new toggle
document.addEventListener('DOMContentLoaded', function() {  

let darkmode = localStorage.getItem('dark-mode');
const themeToggle = document.getElementById('theme-toggle');

const enableDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
    themeToggle.textContent = 'Light';
    console.log('Theme button toggled to dark mode');
};

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'null');
    themeToggle.textContent = 'Dark';
    console.log('Theme button toggled to light mode');
};

if (darkmode ==='active') enableDarkmode();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        darkmode = localStorage.getItem('dark-mode');
        darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    });
}


loadNavigation();

if (document.body.classList.contains('work-page')) {
        initLightbox();
    }
    
    
    if (document.body.classList.contains('work-page')) {
        initSorting();
    }
});



