document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); 
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    const elementsToAnimate = document.querySelectorAll('.home, .About, .Service, .contact');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


