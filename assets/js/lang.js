document.getElementById('es-btn').addEventListener('click', () => {
    setLanguage('es');
});

document.getElementById('en-btn').addEventListener('click', () => {
    setLanguage('en');
});

function setLanguage(lang) {
    const esElements = document.querySelectorAll('.es-tx');
    const enElements = document.querySelectorAll('.en-tx');

    if (lang === 'es') {
        esElements.forEach(element => {
            element.style.display = 'block';
        });
        enElements.forEach(element => {
            element.style.display = 'none';
        });
    } else if (lang === 'en') {
        esElements.forEach(element => {
            element.style.display = 'none';
        });
        enElements.forEach(element => {
            element.style.display = 'block';
        });
    }
}

// Inicializa el idioma al cargar la página
const userLang = navigator.language.startsWith('es') ? 'es' : 'en';
setLanguage(userLang);
