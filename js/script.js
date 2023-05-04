const primaryNavigation = document.getElementById('primary-navigation'),
    navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');
    console.log(visibility)
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    } else {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
});