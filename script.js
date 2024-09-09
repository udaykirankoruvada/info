document.addEventListener('scroll', () => {
    const brand = document.querySelector('nav .brand');
    const scrollPosition = window.scrollY || window.pageYOffset;
    const triggerHeight = 400; // Change this value as needed

    if (scrollPosition > triggerHeight) {
        brand.classList.add('shrink');
    } else {
        brand.classList.remove('shrink');
    }
});
