import "@testing-library/jest-dom"

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: () => ({
        matches: false,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
    })
});