import { useState, useEffect, useRef, memo } from 'react';
import type { BoardProps } from '../Board';
import type { FieldStatus } from '../../enums';
import { CellContent } from './CellContent';
import { CellLine } from './CellLine';
import s from './Cell.module.css';

export type CellProps = Omit<BoardProps, 'fieldList'> & { value: FieldStatus, idx: number };

export const Cell = memo(({
  handleCellClick,
  winDirection,
  winVariant,
  value,
  idx
}: CellProps) => {
  const [cellWidth, setCellWidth] = useState(0);
  const cellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cellRef?.current?.clientWidth) {
      setCellWidth(cellRef.current.clientWidth);
    }
  }, [cellRef]);

  return (
    <div
      className={s.cell}
      onClick={() => handleCellClick(idx)}
      ref={cellRef}
    >
      <CellContent
        value={value}
      />
      {
        winVariant.includes(idx) && <CellLine
          winDirection={winDirection}
          cellWidth={cellWidth}
        />
      }
    </div>
  );
});
