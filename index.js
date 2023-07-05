
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const navigation = document.querySelector('.navigation');

addEventListener('scroll', e => {
    const scrollTop = document.body.scrollTop;
    console.log(scrollTop);
    const translate = scrollTop * 3;
    navigation.style.transform = `translateX(-${translate}px)`;
    console.log(navigation.style.transform);
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));