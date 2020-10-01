import CalendarDataInterface from '../../DataInterfaces/CalendarDataInterface';
import template from './template.hbs';
const render = () => {
  const el = document.createElement('div');
  el.innerHTML = template({ days: CalendarDataInterface.getWeekFromToday });
  return el;
};

export default { render };