{
    let toggleSlide = function(slide, main) {
        let futil = window.futil,
            widthSwitch = ['0px', '20vw'],
            count = 0;
        return function () {
            count++;
            slide.style.width = widthSwitch[(count) % 2];
        }
    };

    let toggle = toggleSlide(futil('.slide-menu'), futil('.wrapper')),
        toggleCount = 0;



    // top head banner control
    window.addEventListener('scroll', () => {
        var a = setTimeout(() => {
            clearTimeout(a);
            var selector = futil('#top-head');
            if(window.scrollY > window.innerHeight) {
                selector.style.position = 'fixed';
                selector.style.backgroundColor = '#242526';
            } else {
                selector.style.position = 'absolute';
                selector.style.backgroundColor = 'transparent';
            }

        }, 50);
    });

    document.querySelector('#top-head-menu-button').addEventListener('click', () => {
        let marginSwitch = ['0px', '19vw'],
            topHeadWidthSwitch = ['100%', -window.innerWidth * 0.2 + document.body.clientWidth + 'px'],
            iconClassSwitch = ['fa-bars', 'fa-arrow-right'];
        toggleCount++;
        toggle();
        futil('.wrapper').style.marginRight = marginSwitch[(toggleCount) % 2];
        futil('#top-head').style.width = topHeadWidthSwitch[(toggleCount) % 2];
        futil('#top-head-menu-button').classList.remove(iconClassSwitch[(toggleCount + 1) % 2]);
        futil('#top-head-menu-button').classList.add(iconClassSwitch[(toggleCount) % 2]);

    });

    var revealDetect = document.querySelectorAll('.reveal-detect');
    revealDetect = [].slice.call(revealDetect);
    window.addEventListener('scroll', () => {
        for(let i=0; i<revealDetect.length; i++) {
            if(revealDetect[i].getBoundingClientRect().top < window.innerHeight) {
                revealDetect[i].classList.add('animated');
            }
        }

    });

}