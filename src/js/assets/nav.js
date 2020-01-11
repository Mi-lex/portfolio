import { debounce, easeIn } from './utilities';

export default function nav() {
    const PAGE_HEADER = `page-header`;
    const PAGE_NAV = `page-nav`;
    const NAV_ITEM = `page-nav__item`;
    const NAV_ITEM_ACTIVE = `page-nav__item--active`;
    const NAV_LINK = `page-nav__link`;
    
    const TABLET_WIDTH = 768;
    const NAV_ACTION_DELAY = 30;

    const navigation = document.querySelector(`.${PAGE_NAV}`);
    const headerHeight = (window.innerWidth > TABLET_WIDTH) ? document.querySelector(`.${PAGE_HEADER}`).offsetHeight : 0;
    const heightGap = (window.innerWidth > TABLET_WIDTH) ? 10 : 2;

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
        let link = e.target.closest(`.${NAV_LINK}`);

        if (!link || !window.requestAnimationFrame) {
            return;
        }

        e.preventDefault();

        scrollTo(document.querySelector(link.hash), scrollTime);
    }

    navigation.addEventListener(`click`, navHandler);

    const navLinks = document.querySelectorAll(`.${NAV_LINK}`);

    const userReachedTheBottom = (fromTop) => {
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        return (Math.abs(scrollHeight - fromTop) - window.innerHeight) < 1
    }

    const scrollPagaHanlder = (e) => {
        const fromTop = window.pageYOffset;

        const navLinksArr = Array.from(navLinks)

        // user gets bottom of the page
        if (userReachedTheBottom(fromTop)) {
            document.querySelector(`.${NAV_ITEM_ACTIVE}`)
                .classList.remove(NAV_ITEM_ACTIVE);
            
            navLinksArr[navLinksArr.length - 1].closest(`.${NAV_ITEM}`).classList.add(NAV_ITEM_ACTIVE);
            return;
        }

        navLinksArr.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop - headerHeight - heightGap <= fromTop &&
                section.offsetTop + section.offsetHeight - headerHeight - heightGap > fromTop
            ) {
                if (link.closest(`.${NAV_ITEM_ACTIVE}`)) {
                    return;
                }

                debounce.start(() => {
                    document.querySelector(`.${NAV_ITEM_ACTIVE}`)
                        .classList.remove(NAV_ITEM_ACTIVE);
                    link.closest(`.${NAV_ITEM}`).classList.add(NAV_ITEM_ACTIVE);
                }, NAV_ACTION_DELAY);
            }
        });
    }

    window.addEventListener("scroll", scrollPagaHanlder);
}