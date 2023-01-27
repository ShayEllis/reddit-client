// Function to generate a unique random ID for lists
// Generate random ID's for lists
const randomID = () => {
    return Math.floor(Date.now() * Math.random() * 100)
}

// Detect if the user prefers the light or dark theme
const detectTheme = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
}

// Set or change theme in localStorage and set data-theme attribute on body element
function setThemePreference (theme) {
    if (!localStorage.getItem('current-theme')) {
        localStorage.setItem('current-theme', theme)
        setBodyTheme(theme)
    } else if (localStorage.getItem('current-theme')) {
        const themeChanged = theme !== localStorage.getItem('current-theme')
        if (themeChanged) {
            localStorage.setItem('current-theme', theme)
            setBodyTheme(theme)
        }
    }
}

// Select the body element and set the data-theme attribute
function setBodyTheme (theme) {
    const bodyElement = document.getElementsByTagName('body')[0]
    
    if (theme !== bodyElement.getAttribute('data-theme')) {
        bodyElement.setAttribute('data-theme', theme)
    }
}

export { randomID, detectTheme, setThemePreference, setBodyTheme }