// Skrypt odpowiedzialny za wyświetlanie aktualnego roku

const currentYear = new Date().getFullYear();
const copyrightInfo = document.querySelector('.footer__text');

copyrightInfo.innerHTML = `&copy; ${currentYear} Bariera Zero`;