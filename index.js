const navigation = document.querySelector('.navigation');
const blurEl = document.querySelector('#blur');
const header = document.querySelector('header');
const nameBackdrop = document.querySelector('#sticky');
const empty = document.querySelector('#empty');
let nameBackdropstyle = nameBackdrop.currentStyle || window.getComputedStyle(nameBackdrop);


const observer = new IntersectionObserver((entries) => {
    const scrollTop = document.body.scrollTop;
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const resumeDownload = document.querySelector('.button');
resumeDownload.addEventListener('click', function (event) {
    const anchor = document.createElement('a');
    anchor.href = '/files/Wesley Software Engineer Resume.pdf';
    anchor.download = 'Wesley\'s Resume.pdf';

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
})

addEventListener('scroll', e => {
    const scrollTop = document.body.scrollTop;
    console.log('scroll: ' + scrollTop);
    const translate = scrollTop * 3;
    const blur = scrollTop / 300;
    navigation.style.transform = `translateX(-${translate}px)`;
    console.log(navigation.style.transform);
    console.log('width: ' + window.innerWidth);
    if (scrollTop > window.innerWidth/2) {
        header.style.opacity = 0;
    }
    else {
        header.style.opacity = 1;
    }
})

addEventListener('scroll', e => {
    const scrollTop = document.body.scrollTop;
    var toTop = nameBackdrop.offsetTop;
    console.log('to: ' + toTop);

    console.log(scrollTop);
    console.log(window.innerHeight);
    if (scrollTop > (window.innerHeight)/3) {
        blurEl.style.backdropFilter = 'blur(12px)';
        
        console.log('now');
    }
    else {
        blurEl.style.backdropFilter = '';
    }

    if (scrollTop >= window.innerHeight) {
        nameBackdrop.style.marginLeft = '0';
        nameBackdrop.style.marginRight = '0';
    }
    else if (scrollTop >= toTop) {
        nameBackdrop.style.marginLeft = '20vw';
        nameBackdrop.style.marginRight = '20vw';
    }
    else {
        nameBackdrop.style.marginLeft = '32vw';
        nameBackdrop.style.marginRight = '32vw';
    }

    // blurMarginLeft = parseInt(nameBackdropstyle.marginLeft);
    // blurMarginRight = parseInt(nameBackdropstyle.marginRight);
    // console.log('marginleft: ' + blurMarginLeft);
    // console.log('marginright: ' + blurMarginRight);
    // blurMarginLeft++;
    // blurMarginRight++;
    // blurMarginLeft = blurMarginLeft + 'px';
    // blurMarginRight = blurMarginRight + 'px';
    // console.log('marginleft: ' + blurMarginLeft);
    // console.log('marginright: ' + blurMarginRight);
    // nameBackdrop.marginLeft = blurMarginLeft;
    // nameBackdrop.blurMarginRight = blurMarginRight;
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));