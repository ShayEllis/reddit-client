// Detect if the user prefers the light or dark theme
const detectTheme = () => {
    return localStorage.getItem('current-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

// Select the body element and set the data-theme attribute
function setHtmlTheme (theme) {
    const htmlElement = document.firstElementChild
    
    if (theme !== htmlElement.getAttribute('data-theme')) {
        htmlElement.setAttribute('data-theme', theme)
    }
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

export { detectTheme, setThemePreference, setHtmlTheme }