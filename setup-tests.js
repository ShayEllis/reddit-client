import "@testing-library/jest-dom"

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage
// var localStorageMock = (function() {
//   var store = {};
//   return {
//     getItem: function(key) {
//       return store[key];
//     },
//     setItem: function(key, value) {
//       store[key] = value.toString();
//     },
//     clear: function() {
//       store = {};
//     },
//     removeItem: function(key) {
//       delete store[key];
//     }
//   };
// })();
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });