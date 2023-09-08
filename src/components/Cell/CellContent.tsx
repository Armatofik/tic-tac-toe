import { memo } from 'react';
import type { FieldStatus } from '../../enums';
import s from './Cell.module.css';

export const CellContent = memo(({value}: {value: FieldStatus}) => (
  <div className={s.cellContent}>
    {value}
  </div>
));
