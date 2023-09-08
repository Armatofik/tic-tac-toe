import { memo } from 'react';
import { Turn, Winner } from '../../enums';
import s from './Header.module.css';

type HeaderProps = {
  winner: Winner,
  turn: Turn
};

export const Header = memo(({winner, turn}: HeaderProps) => {
  let content = '';

  if (winner === Winner.EMPTY) {
    content = `Сейчас ходит ${turn === Turn.X ? 'X' : 'O'}`;
  } else if (winner === Winner.DRAW) {
    content = 'Ничья!';
  } else {
    content = `Победил ${winner}`;
  }

  return (
    <div className={s.header}>
      <h1 className={s.title}>{content}</h1>
    </div>
  );
});
