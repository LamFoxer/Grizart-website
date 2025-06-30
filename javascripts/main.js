document.addEventListener("DOMContentLoaded", function() {
    // Анимация перехода с заставки на основной экран
    let art = document.querySelector('.art');
    let studio = document.querySelector('.studio');
    let artClicked = false;
    let studioClicked = false;
    let spiral = document.querySelector('.spiral');
    let whiteEffect = document.querySelector('.whiteEffect');
    let basePageBackground = document.querySelector('.basePageBackground');

    art.addEventListener('click', function() {

        if (!artClicked) {
            artClicked = true;
            art.classList.add('clicked');
            checkBothClicked();

            art.classList.add('start');
        setTimeout(function() {
            art.classList.remove('start');
            art.classList.add('final');
        }, 1000);
        }
        
    });

    studio.addEventListener('click', function() {
        if (!studioClicked) {
            studioClicked = true;
            studio.classList.add('clicked');
            checkBothClicked();

            studio.classList.add('start');
            setTimeout(function() {
                studio.classList.remove('start');
                studio.classList.add('final');
            }, 1000);
        }
    });

    function checkBothClicked() {
        if (artClicked && studioClicked) {
            art.classList.add('final');
            studio.classList.add('final');
            
            setTimeout(function() {
                spiral.classList.add('spiralAanimate');
            }, 2000);
        }
    }

    function checkBothClicked() {
        if (artClicked && studioClicked) {
            art.classList.add('final');
            studio.classList.add('final');
            setTimeout(function() {
                spiral.classList.add('spiralAnimate');
                setTimeout(function() {
                    whiteEffect.style.opacity = '1';
                    setTimeout(function() {
                        basePageBackground.style.opacity = '1';

                        let mainHeadlineUp = document.querySelector('.mainHeadlineUp');
                        let mainHeadlineDown = document.querySelector('.mainHeadlineDown');
                        let first = document.querySelector('.first');
                        let second = document.querySelector('.second');
                        let third = document.querySelector('.third');
                        let contacts = document.querySelector('.contacts');
                        let services = document.querySelector('.services');
                        let cases = document.querySelector('.cases');
                        let homepageImage = document.querySelector('.homepageImage');
                        if (mainHeadlineUp)
                            mainHeadlineUp.style.opacity = '1';
                            
                        if (mainHeadlineDown)
                            mainHeadlineDown.style.opacity = '1';

                        if (first)
                            first.style.opacity = '1';

                        if (second)
                            second.style.opacity = '1';

                        if (third)
                            third.style.opacity = '1';

                        if (contacts)
                            contacts.style.opacity = '1';

                        if (services)
                            services.style.opacity = '1';

                        if (cases)
                            cases.style.opacity = '1';
                    }, 2000);
                    
                }, 1500);
            }, 2000);let basePageBackground = document.querySelector('.basePageBackground');
    let headlines = document.querySelectorAll('.mainHeadlineUp, .mainHeadlineDown');
        }
    }

// АНИМАЦИЯ СТРАНИЦЫ КЕЙСОВ

let


});