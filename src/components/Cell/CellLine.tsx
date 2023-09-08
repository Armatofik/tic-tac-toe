import { memo } from 'react';
import type { WinDirection } from '../../enums';
import { getLineStyle } from '../../utils';

type CellLineProps = {
  winDirection: WinDirection,
  cellWidth: number
};

export const CellLine = memo(({winDirection, cellWidth}: CellLineProps) => (
  <div style={getLineStyle(winDirection, cellWidth)} />
));
