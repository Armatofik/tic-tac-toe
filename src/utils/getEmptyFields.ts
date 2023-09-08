import { FieldStatus } from '../enums';
import { FIELD_SIZE } from '../const';

export const getEmptyFields = (): FieldStatus[] => new Array(FIELD_SIZE ** 2)
  .fill(FieldStatus.EMPTY);
