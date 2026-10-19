document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navContent = document.querySelector('.nav-content');

    // Meniu burger pentru dispozitive mobile
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navContent.classList.toggle('active');
        });
    }

    // Gestionare dropdown-uri la click / atingere ecran
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');

        link.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('active');

            // Închide celelalte dropdown-uri deschise
            document.querySelectorAll('.dropdown-menu').forEach(d => {
                d.classList.remove('active');
            });

            document.querySelectorAll('.nav-link').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });

            // Comută dropdown-ul curent
            if (!isOpen) {
                dropdown.classList.add('active');
                link.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Închide meniurile la click în afara navigației
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.site-header')) {
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            document.querySelectorAll('.nav-link').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });
            if (navContent) {
                navContent.classList.remove('active');
            }
        }
    });

    // Închide meniurile la apăsarea tastei Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            document.querySelectorAll('.nav-link').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });
            if (navContent) {
                navContent.classList.remove('active');
            }
        }
    });
});