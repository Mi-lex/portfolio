export default function projectInfo() {
    const projectContainer = document.querySelector('.projects__list');

    const toggleProjectInfo = (e) => {
        if (e.target.className === 'project__content-toggler') {
            e.target.closest('.project__container').classList.toggle('project__container--closed');
        }
    };

    projectContainer.addEventListener('click', toggleProjectInfo);
}