document.addEventListener('DOMContentLoaded', () => {
    const mnBtn = document.querySelector('.meganv-hamburger');
    const hamburgerDiv = document.querySelector('.meganv-hamburger-div');
    const menu = document.querySelector('.meganv-main');
    const overlay = document.querySelector('.meganv-overlay');
    const body = document.body;

    function toggleClasses() {
        mnBtn.classList.toggle('sch-menu-2x');
        mnBtn.classList.toggle('sch-x-2x');
        hamburgerDiv.classList.toggle('meganv-move-content-right');
        menu.classList.toggle('meganv-show-leftflyout');
        overlay.classList.toggle('meganv-overlay--on_right');

        // Toggle no-scroll class on body
        if (overlay.classList.contains('meganv-overlay--on_right')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    }

    mnBtn.addEventListener('click', toggleClasses);
    overlay.addEventListener('click', toggleClasses);

    // Function to handle screen resize
    function handleResize() {
        if (window.innerWidth <= 1024) {
            menu.classList.remove('meganv-show-leftflyout');
        } else {
            menu.classList.add('meganv-show-leftflyout');
        }
    }

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Call handleResize on page load to ensure proper class handling
    handleResize();
});

document.addEventListener('DOMContentLoaded', () => {
    const meganvActivateTriggerClick = document.querySelectorAll('.meganv-activate-trigger-click');

    function closeAllPanels() {
        meganvActivateTriggerClick.forEach((item) => {
            const panel = item.querySelector('.meganv-panel-contactus');
            if (panel) {
                panel.style.display = 'none';
            }
        });
    }

    meganvActivateTriggerClick.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation(); // Prevent the click from bubbling up to the document

            const clickedPanel = item.querySelector('.meganv-panel-contactus');

            // Close all other panels
            meganvActivateTriggerClick.forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherPanel = otherItem.querySelector('.meganv-panel-contactus');
                    if (otherPanel) {
                        otherPanel.style.display = 'none';
                    }
                }
            });

            // Toggle the clicked panel
            if (clickedPanel) {
                clickedPanel.style.display = clickedPanel.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Add click event listener to the document
    document.addEventListener('click', (event) => {
        // Check if the click is outside of any meganv-activate-trigger-click element
        if (!event.target.closest('.meganv-activate-trigger-click')) {
            closeAllPanels();
        }
    });
});  

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.meganvpsr-main__menu__l1');

    menuItems.forEach(item => {
        const trigger = item.querySelector('.meganv-activate-trigger');
        const target = item.querySelector('.meganv-activate-target');

        if (trigger && target) {
            let timeout;

            const showMenu = () => {
                clearTimeout(timeout);
                target.style.display = 'block';
            };

            const hideMenu = () => {
                timeout = setTimeout(() => {
                    target.style.display = 'none';
                }, 200); // Small delay to prevent menu from closing when moving to submenu
            };

            trigger.addEventListener('mouseover', showMenu);
            item.addEventListener('mouseleave', hideMenu);

            // Handle focus events for accessibility
            trigger.addEventListener('focus', showMenu);
            item.addEventListener('focusout', (e) => {
                if (!item.contains(e.relatedTarget)) {
                    hideMenu();
                }
            });
        }
    });
});

function togglePassword() {
    var passwordField = document.getElementById('password');
    var eyeIcon = document.querySelector('.eye-pos .onloadsprite-imgs');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.style.backgroundPosition = '-13px -10px'; // Change to the hide icon position
    } else {
        passwordField.type = 'password';
        eyeIcon.style.backgroundPosition = '-13px -58px'; // Change to the show icon position
    }
}