export const addCSS = (path) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './frontend/styles/' + path + '.css';

    const existingLink = document.querySelector(`link[href="${link.href}"]`);
    if (!existingLink) {
        document.head.appendChild(link);
    }
};

