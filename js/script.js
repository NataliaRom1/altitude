const body = document.querySelector('body');
const burgerCheckbox = document.querySelector('.header-mob__burger-checkbox');

if (burgerCheckbox) {
    const headerlinks = document.querySelectorAll('.header-mob__link');
    const headerButton = document.querySelectorAll('.header-mob__button');
    const links = [...headerlinks, ...headerButton];

    burgerCheckbox.addEventListener('change', function () {
        if (this.checked) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "visible";
        }

        links.forEach(link => {
            link.addEventListener('click', function () {
                burgerCheckbox.checked = false;
                body.style.overflow = "visible";
            })
        });
    });
}

const links =  document.querySelectorAll('a[href^="#"]')

if (links.length) {
    links.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}