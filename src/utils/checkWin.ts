import { FieldStatus, Winner } from '../enums';
import { WIN_LINES, DIRECTIONS } from '../const';

export const checkWin = (inputList: FieldStatus[]) => {
  for (let i = 0; i < WIN_LINES.length; i++) {
    const [a, b, c] = WIN_LINES[i];

    if (
      inputList[a]
      && inputList[a] === inputList[b]
      && inputList[a] === inputList[c]
    ) {
      return {
        winner: inputList[a] === FieldStatus.X ? Winner.X : Winner.O,
        direction: DIRECTIONS.get(i)!,
        variant: i
      };
    }
  }

  if (inputList.every(el => !!el)) {
    return { winner: Winner.DRAW };
  }

  return { winner: Winner.EMPTY };
};
