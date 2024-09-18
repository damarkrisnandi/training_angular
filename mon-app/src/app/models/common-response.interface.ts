import { Column } from './column';

export interface CommonResponse<T> {
  status: string;
  data: ResponseData<T>;
}

interface ResponseData<T> {
  body: T;
  column: Column[];
}
