import MdColorPicker from '../index';

document.addEventListener('DOMContentLoaded', () => {
  MdColorPicker({
    elementName: 'picker',
    createIcon: true,
    defaultColor: '#212121'
  });

  MdColorPicker({
    elementName: 'picker2',
    createIcon: false,
    defaultColor: 'red'
  });
  const events = MdColorPicker({
    elementName: 'picker3',
    createIcon: false,
    defaultColor: 'red'
  });

  events.on('color-changed', color => {
    document.getElementById('picker3').value = color;
  });
});
