const theme = localStorage.getItem('current-theme') || (window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light')
document.firstElementChild.setAttribute('data-theme', theme)