import 'babel-polyfill';
import MdColorPicker from '../src/index';
document.addEventListener('DOMContentLoaded', () => {
  const pickers = [
    'picker1',
    'picker2',
    'picker3',
    'picker4',
    'picker5',
    'picker6',
    'picker7',
    'picker8',
    'picker9'
  ];

  pickers.forEach(pickerId => {
    const events = MdColorPicker({
      createIcon: false,
      defaultColor: '#FEFEFE',
      elementName: pickerId
    });

    events.on('color-changed', color => {
      document.getElementById(pickerId).value = color;
    });
  });
});
