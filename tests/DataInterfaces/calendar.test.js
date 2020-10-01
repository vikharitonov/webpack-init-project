import CalendarDataInterface from '../../src/DataInterfaces/CalendarDataInterface';

const twoDigitsFormat = (v) => {
  return `${v}`.padStart(2, 0);
}
const weekFromNow = CalendarDataInterface.getWeekFromToday();

describe('Test calendar dataInterface', () => {
  test('- it has getCurrentDate function', () => {
    expect(typeof CalendarDataInterface.getCurrentDate)
      .toBe('function');
  });
  test('- it getCurrentDate return current date', () => {
    const today = new Date();
    const day = twoDigitsFormat(today.getDate());
    const month = twoDigitsFormat(today.getMonth() + 1);
    const year = today.getFullYear();

    expect(CalendarDataInterface.getCurrentDate())
      .toEqual(`${day}/${month}/${year}`);
  });
  describe('- it test getWeekFromToday function', () => {
    test('-- it has getWeekFromToday function', () => {
      expect(typeof CalendarDataInterface.getWeekFromToday)
        .toBe('function');
    });

    test('-- it getWeekFromToday return Array', () => {
      expect(Array.isArray(weekFromNow))
        .toBe(true);
    });

    test('-- it week has 7 days', () => {
      let i = 0;
      for (const day of weekFromNow) {
        ++i;
        expect(day.match(/^\d{2}\/\d{2}\/\d{4}$/)).not.toBeNull();
      }
      expect(i).toBe(7);
    });

  });

});
