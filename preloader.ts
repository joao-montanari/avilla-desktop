window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (select, text) => {
        const element = document.getElementById(select);
        if (element) {
            element.innerText = text;
        }
    };

    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.version[dependency]);
    }
});