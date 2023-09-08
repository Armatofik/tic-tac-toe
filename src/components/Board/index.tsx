import type { FieldStatus, WinDirection } from '../../enums';
import { Cell } from "../Cell";
import s from './Board.module.css';

export type BoardProps = {
  fieldList: FieldStatus[],
  winVariant: number[],
  winDirection: WinDirection,
  handleCellClick: (idx: number) => void
};

export const Board = (props: BoardProps) => {
  const {fieldList, ...cellProps} = props;

  return (
    <div className={s.board}>
      {
        fieldList.map((field, idx) => (
          <Cell idx={idx} value={field} key={`cell-${idx}`} {...cellProps} />
        ))
      }
    </div>
  );
};
