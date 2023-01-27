// Detect if the user prefers the light or dark theme
const detectTheme = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
}

// Set or change theme in localStorage and set data-theme attribute on body element
function setThemePreference (theme) {
    if (!localStorage.getItem('current-theme')) {
        localStorage.setItem('current-theme', theme)
        setHtmlTheme(theme)
    } else if (localStorage.getItem('current-theme')) {
        const themeChanged = theme !== localStorage.getItem('current-theme')
        if (themeChanged) {
            localStorage.setItem('current-theme', theme)
            setHtmlTheme(theme)
        }
    }
}

// Select the body element and set the data-theme attribute
function setHtmlTheme (theme) {
    const bodyElement = document.firstElementChild
    
    if (theme !== bodyElement.getAttribute('data-theme')) {
        bodyElement.setAttribute('data-theme', theme)
    }
}

export { detectTheme, setThemePreference, setHtmlTheme }