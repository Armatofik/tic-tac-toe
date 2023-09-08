import { useState, useEffect, useCallback, Fragment } from 'react';

import { WinDirection, FieldStatus, Winner, Turn } from './enums';
import { checkWin, getEmptyFields } from './utils';
import { WIN_LINES } from './const';
import { Header, Board } from './components';

export const App = () => {
  const [fieldList, setFieldList] = useState(getEmptyFields());
  const [turn, setTurn] = useState(Turn.X);

  const [winner, setWinner] = useState<Winner>(Winner.EMPTY);
  const [winDirection, setWinDirection] = useState(WinDirection.NONE);
  const [winVariant, setWinVariant] = useState<number[]>([]);

  const handleClick = useCallback((fieldNumber: number) => {
    if (winner !== Winner.EMPTY) {
      return;
    }

    setFieldList((prevFieldList) => {
      const [...newFieldList] = prevFieldList;

      if (newFieldList[fieldNumber]) {
        return newFieldList;
      }

      newFieldList[fieldNumber] = turn === Turn.X ?
        FieldStatus.X : FieldStatus.O;

      setTurn((prevTurn) => prevTurn === Turn.X ? Turn.O : Turn.X);

      return newFieldList;
    });
  }, [winner, turn]);

  useEffect(() => {
    const {winner, direction, variant} = checkWin(fieldList);

    setWinner(winner);
    setWinDirection(direction ?? WinDirection.NONE);
    setWinVariant(variant !== undefined ? WIN_LINES[variant] : []);
  }, [fieldList]);

  return (
    <Fragment>
      <Header
        winner={winner}
        turn={turn}
      />
      <Board
        fieldList={fieldList}
        winVariant={winVariant}
        winDirection={winDirection}
        handleCellClick={handleClick}
      />
    </Fragment>
  );
};
