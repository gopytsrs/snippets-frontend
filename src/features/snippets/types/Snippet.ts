export interface Snippet {
  uuid: string;
  views: number;
  title: string;
  content: string;
  createdAt: string;
}

export enum OrderKey {
  VIEWS = 'views',
  CREATED_AT = 'createdAt',
}

export enum SortOrder {
  DESC = 'desc',
  ASC = 'asc',
}

export interface SortParams {
  [OrderKey.CREATED_AT]?: SortOrder;
  [OrderKey.VIEWS]?: SortOrder;
}
