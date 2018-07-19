import 'babel-polyfill';
import MdColorPicker from '../src/index';
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

  const right = MdColorPicker({
    elementName: 'picker4',
    createIcon: false,
    defaultColor: 'red'
  });
  right.on('color-changed', color => {
    document.getElementById('picker4').value = color;
  });

  const left = MdColorPicker({
    elementName: 'picker5',
    createIcon: false,
    defaultColor: 'red'
  });
  left.on('color-changed', color => {
    document.getElementById('picker5').value = color;
  });

  const bottom = MdColorPicker({
    elementName: 'picker6',
    createIcon: false,
    defaultColor: 'red'
  });
  bottom.on('color-changed', color => {
    document.getElementById('picker6').value = color;
  });
});
