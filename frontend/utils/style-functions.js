export const addCSS = (path) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './frontend/styles/' + path + '.css';

    // Verifică dacă există deja un link cu acest href în head
    const existingLink = Array.from(document.head.getElementsByTagName('link'))
        .find((el) => el.href === link.href);

    if (!existingLink) {
        document.head.appendChild(link);
    }
};
