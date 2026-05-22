function loadNavigation() {
    const currentPath = window.location.pathname;

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
    }
}

document.addEventListener('DOMContentLoaded', loadNavigation)
