const currentYear = new Date().getFullYear();
const copyrightInfo = document.querySelector('.footer__text');

copyrightInfo.innerHTML = `&copy; ${currentYear} Bariera Zero`;