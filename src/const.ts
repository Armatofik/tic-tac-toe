import { WinDirection } from './enums';

const FIELD_SIZE = 3;

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const DIRECTIONS = new Map([
  [0, WinDirection.HORIZONTAL],
  [1, WinDirection.HORIZONTAL],
  [2, WinDirection.HORIZONTAL],
  [3, WinDirection.VERTICAL],
  [4, WinDirection.VERTICAL],
  [5, WinDirection.VERTICAL],
  [6, WinDirection.DEG45],
  [7, WinDirection.DEG135]
]);

export {
  FIELD_SIZE,
  DIRECTIONS,
  WIN_LINES
};
