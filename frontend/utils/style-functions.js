export const addCSS = (path) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './frontend/styles/' + path + '.css';
    document.head.appendChild(link);
};

