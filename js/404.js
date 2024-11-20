window.onload = () => {
    
    const validPaths = ['/', '/index.html', '/about.html', '/book-detail.html'];

    if (!validPaths.includes(window.location.pathname)) {
        window.location.href = '/404.html';
    }
};
