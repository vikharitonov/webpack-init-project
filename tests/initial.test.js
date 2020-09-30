import { app } from '../src';

describe('App initialization:', () => {
  test('getAppElement is function ', () => {
    console.log(typeof app.getAppElement)
    expect(typeof app.getAppElement === 'function').toBe(true);
  });

  test('app.getAppElement is function ', () => {
    app.getAppElement = jest.fn();
    jest.spyOn(app, 'getAppElement');
    expect(app.getAppElement).toBeCalledTimes(1);
  });
});






