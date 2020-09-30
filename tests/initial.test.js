import '@testing-library/jest-dom';
import { app } from '../src';
let appElement = {};

beforeAll(() => {
  appElement = app.createAppElement();
  spyOn(document.body, 'appendChild');
})

describe('App initialization:', () => {
  test('createAppElement return NOT null', () => {
    expect(appElement).not.toBeNull();
  });

  test('createAppElement return element with id', () => {
    expect(appElement.id).not.toBeNull();
  });

  test('createAppElement return element with id equal to "app"', () => {
    expect(appElement.id).toEqual('app');
  });

  test('createAppElement return element with innerHtml', () => {
    expect(appElement.innerHTML).not.toBeNull();
  });

  test('createAppElement return element with innerHtml', () => {
    expect(appElement).toContainHTML(`<h1 data-testid="tst-header">test</h1>`);
  });

});






