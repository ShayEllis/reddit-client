import "@testing-library/jest-dom"

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: false,
  value: vi.fn().mockImplementation(query => ({
    matches: query === '(prefers-color-scheme: dark)',
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
});