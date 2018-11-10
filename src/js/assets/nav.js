import {debounce} from './utilities';

export default function nav() {
    const navigation = document.querySelector('.page-nav');
    const tabletWidth = 768;
    const headerHeight = (window.innerWidth > tabletWidth) ? document.querySelector('.page-header').offsetHeight : 0;

    const easeOut = (currentTime, startValue, valueChange, duration) => {
        currentTime /= startValue;
        currentTime--;
        return valueChange * (Math.pow(currentTime, 3) + 1) + duration;
    };

    const easeIn = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const scrollTo = (target, duration) => {
        const currentPosition = window.pageYOffset;
        const targetPosition = target.getBoundingClientRect().top - headerHeight;
        let startTime = null;

        const step = (timeStamp) => {
            if (startTime === null) {
                startTime = timeStamp;
            }

            const progress = timeStamp - startTime;
            const nextPosition = easeIn(progress, currentPosition, targetPosition, duration);

            window.scrollTo(0, nextPosition);

            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    const scrollTime = 900;

    const navHandler = e => {
        let link = e.target.closest('.page-nav__link');

        if (!link || !window.requestAnimationFrame) {
            return;
        }

        e.preventDefault();

        scrollTo(document.querySelector(link.hash), scrollTime);
    }

    navigation.addEventListener('click', navHandler);

    const navLinks = document.querySelectorAll('.page-nav__link');



    const scrollPagaHanlder = (e) => {
        const fromTop = window.pageYOffset;

        Array.from(navLinks).forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop - headerHeight - 10 <= fromTop &&
                section.offsetTop + section.offsetHeight - headerHeight - 10 > fromTop
            ) {
                if (link.closest('.page-nav__item--active')) {
                    return;
                }

                debounce.start(() => {
                    document.querySelector('.page-nav__item--active')
                        .classList.remove('page-nav__item--active');
                    link.closest('.page-nav__item').classList.add('page-nav__item--active');
                }, 80);
            }
        });
    }

    window.addEventListener("scroll", scrollPagaHanlder);
}