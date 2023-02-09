const theme = localStorage.getItem('current-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
document.getElementsByTagName('body')[0].setAttribute('data-theme', theme)