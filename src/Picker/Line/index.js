/* @flow */
import { Square } from '../Square';
import EventEmitter from 'wolfy87-eventemitter';

export const Line = (element: HTMLElement, colors: string[], ee: EventEmitter) => {
  const line = document.createElement('div');
  line.setAttribute('class', 'line');
  colors.forEach(color => Square(line, color, ee));
  element.appendChild(line);
};
