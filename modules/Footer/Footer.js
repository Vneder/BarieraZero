const currentYear = new Date().getFullYear();

// const copyrightInfo = document.getElementById('copyright-info');
const copyrightInfo = document.querySelector('.footer__text');
copyrightInfo.innerHTML = `&copy; ${currentYear} Bariera Zero`;