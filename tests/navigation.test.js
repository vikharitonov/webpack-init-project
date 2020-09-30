import '@testing-library/jest-dom';
import Navigation from '../src/PresentationalComponents/Navigation';

describe('Navigation:', () => {
  const navElement = Navigation.render();

  test('- it exist', () => {
    expect(Navigation).not.toBeNull();
  });
  test('- it has render function', () => {
    expect(typeof Navigation.render).toBe('function');
  });
  test('- it render function return not undefined', () => {
    expect(navElement).not.toBeUndefined();
  });
  test('- it render function return DOM element', () => {
    expect(navElement instanceof HTMLElement).toBe(true);
  });
  test('- it render function not empty NAV element', () => {
    expect(navElement.tagName).toBe('NAV');
    expect(navElement.innerHTML).not.toBe("");
  });
  test('- it element has ul, li, a tags', () => {
    expect(navElement.innerHTML.includes('<ul')).toBe(true);
    expect(navElement.innerHTML.includes('</ul>')).toBe(true);
    expect(navElement.innerHTML.includes('<li')).toBe(true);
    expect(navElement.innerHTML.includes('</li>')).toBe(true);
    expect(navElement.innerHTML.includes('<a href=')).toBe(true);
    expect(navElement.innerHTML.includes('/a>')).toBe(true);
  });
  test('- it element logo as img', () => {
    expect(navElement.innerHTML.includes('<img src=')).toBe(true);
  });
});
