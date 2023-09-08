import { WinDirection } from '../enums';

type Style = {
  position: 'absolute',
  transform: string,
  width: string,
  height: string,
  borderBottom: string,
  borderRight: string,
  display: 'none'
};

type ReturnType = Pick<Style, 'position' | 'transform' | 'width' | 'borderBottom'>
  | Pick<Style, 'position' | 'width' | 'borderBottom'>
  | Pick<Style, 'position' | 'height' | 'borderRight'>
  | Pick<Style, 'display'>;

export const getLineStyle = (direction: WinDirection, cellWidth: number) : ReturnType => {
  if (direction === WinDirection.DEG45)
    return {
      position: 'absolute',
      transform: 'rotate(45deg)',
      width: `${Math.sqrt(2 * cellWidth ** 2)}px`,
      borderBottom: '2px solid red'
    };
  if (direction === WinDirection.DEG135)
    return {
      position: 'absolute',
      transform: 'rotate(135deg)',
      width: `${Math.sqrt(2 * cellWidth ** 2)}px`,
      borderBottom: '2px solid red'
    };
  if (direction === WinDirection.HORIZONTAL)
    return {
      position: 'absolute',
      width: `${cellWidth}px`,
      borderBottom: '2px solid red'
    };
  if (direction === WinDirection.VERTICAL)
    return {
      position: 'absolute',
      height: `${cellWidth}px`,
      borderRight: '2px solid red'
    };

  return  {
    display: 'none'
  };
}
