document.addEventListener("DOMContentLoaded", () => {
    // 1. Hamburger Menu Logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggles the 'open' class on the sidebar
            sidebar.classList.toggle('open');
        });
    }
});

/**
 * Function to handle page navigation
 * @param {string} pageId - The ID of the section to show
 * @param {HTMLElement} element - The clicked navigation item
 */
function showPage(pageId, element) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Remove 'active' class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show the targeted section
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Add 'active' class to the clicked sidebar item
    if (element) {
        element.classList.add('active');
    }

    // --- NEW: Close the mobile sidebar automatically after clicking a link ---
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }

    // Scroll back to top when switching pages
    window.scrollTo(0, 0);
}


// /**
//  * Function to handle page navigation
//  * @param {string} pageId - The ID of the section to show
//  * @param {HTMLElement} element - The clicked navigation item
//  */
// function showPage(pageId, element) {
//     // 1. Hide all sections
//     const pages = document.querySelectorAll('.page');
//     pages.forEach(page => {
//         page.classList.remove('active');
//     });

//     // 2. Remove 'active' class from all nav items
//     const navItems = document.querySelectorAll('.nav-item');
//     navItems.forEach(item => {
//         item.classList.remove('active');
//     });

//     // 3. Show the targeted section
//     const targetPage = document.getElementById(pageId);
//     if (targetPage) {
//         targetPage.classList.add('active');
//     }

//     // 4. Add 'active' class to the clicked sidebar item
//     if (element) {
//         element.classList.add('active');
//     } else {
//         // Fallback for initial load if needed
//         const defaultNav = document.querySelector(`[onclick="showPage('${pageId}', this)"]`);
//         if (defaultNav) defaultNav.classList.add('active');
//     }

//     // Scroll back to top when switching pages
//     window.scrollTo(0, 0);
// }



// // --- MOBILE HAMBURGER MENU LOGIC ---

// const hamburgerBtn = document.getElementById('hamburger-btn');
// const sidebar = document.getElementById('sidebar');

// // 1. Toggle the sidebar and animate the hamburger button
// if (hamburgerBtn && sidebar) {
//     hamburgerBtn.addEventListener('click', () => {
//         sidebar.classList.toggle('open');
//         hamburgerBtn.classList.toggle('active');
//     });
// }

// // 2. Automatically close the sidebar when a link is clicked on mobile
// const navLinks = document.querySelectorAll('.nav-item');
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth <= 768) {
//             sidebar.classList.remove('open');
//             hamburgerBtn.classList.remove('active');
//         }
//     });
// });