enum FieldStatus {
  EMPTY = '',
  X = 'X',
  O = 'O'
}

enum Winner {
  X = 'X',
  O = 'O',
  DRAW = 'DRAW',
  EMPTY = ''
}

enum Turn {
  X,
  O
}

enum WinDirection {
  NONE,
  HORIZONTAL,
  VERTICAL,
  DEG45,
  DEG135
}

export {
  WinDirection,
  FieldStatus,
  Winner,
  Turn
};
