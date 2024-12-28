const body = document.querySelector('body');
const burgerCheckbox = document.querySelector('.header-mob__burger-checkbox');

if (burgerCheckbox) {
    const headerlinks = document.querySelectorAll('.header-mob__link');
    const headreLogo = document.querySelectorAll('.header-mob__link');
    const links = [...headerlinks, ...headreLogo];

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

const headerLinks =  document.querySelectorAll('.header-mob__link[href^="#"]')

if (headerLinks.length) {
    headerLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}