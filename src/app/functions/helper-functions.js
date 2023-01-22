// Function to generate a unique random ID for lists
const randomID = () => {
    return Math.floor(Date.now() * Math.random() * 100)
}

// Detect if the user prefers the light or dark theme
const detectTheme = () => {
    window.matchMedia('(prefers-color-scheme: dark)')
}

export { randomID }

