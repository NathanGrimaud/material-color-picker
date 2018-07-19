/* @flow         */
'use strict';
import { Line } from '../Line';
import EventEmitter from 'wolfy87-eventemitter';
import { Option } from 'space-lift';
const GRID_WIDTH = 380;
const GRID_HEIGHT = 200;

function placeGrid(position: DOMRect) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canPlaceLeft = position.right - GRID_WIDTH > 0;
  const canPlaceRight = position.left + GRID_WIDTH < width;
  const canPlaceTop = position.top - GRID_HEIGHT > 0;
  const canPlaceBottom = position.bottom + GRID_HEIGHT < height;
  return {
    canPlaceLeft,
    canPlaceRight,
    canPlaceTop,
    canPlaceBottom
  };
}

/**
 * Takes an element in input
 * and returns the coordinates of each corner
 * of the element
 */
function locateInput(element: HTMLElement) {
  const position = element.getBoundingClientRect();
  return {
    top: position.top + window.scrollY,
    bottom: position.bottom + window.scrollY,
    right: position.right + window.scrollX,
    left: position.left + window.scrollX
  };
}

export const Grid = (
  input: HTMLElement,
  element: HTMLElement,
  colors: string[][],
  ee: EventEmitter
) => {
  const gridWrapper = document.createElement('div');
  function replaceGrid() {
    const coords = locateInput(input);
    const placement = placeGrid(coords);
    const INPUT_HEIGHT = input.style.height;
    const INPUT_WIDTH = input.style.width;
    const width = window.innerWidth;
    const height = window.innerHeight;
    /* now we can place the grid around the input */
    if (placement.canPlaceBottom === true) {
      gridWrapper.style.top = `${coords.bottom}px`;
    } else if (placement.canPlaceTop === true) {
      gridWrapper.style.top = `${coords.top - GRID_HEIGHT}px`;
    }
    if (placement.canPlaceRight === true && placement.canPlaceLeft === true) {
      gridWrapper.style.left = `${coords.left - GRID_WIDTH / 4}px`;
    } else if (placement.canPlaceRight === true) {
      gridWrapper.style.left = `${coords.left}px`;
    } else if (placement.canPlaceLeft === true) {
      gridWrapper.style.left = `${coords.right - GRID_WIDTH}px`;
    }
  }
  replaceGrid();
  window.addEventListener('resize', replaceGrid);
  gridWrapper.setAttribute('class', 'grid-wrapper');
  const grid = document.createElement('div');
  grid.setAttribute('class', 'grid mdc-dialog__surface');
  colors.forEach(line => Line(grid, line, ee));
  gridWrapper.appendChild(grid);

  element.appendChild(gridWrapper);
};
