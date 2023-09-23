export interface Snippet {
  uuid: string;
  views: number;
  title: string;
  content: string;
  createdAt: string;
  expiresAt: string;
}

export interface SnippetCreateDto {
  title: string;
  content: string;
  expiryInMinutes: number;
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
