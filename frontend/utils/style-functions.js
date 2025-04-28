export const addCSS = (path) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './styles/' + path + '.css';
    document.head.appendChild(link);
};

