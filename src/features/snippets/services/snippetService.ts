import axios from 'axios';
import { Snippet, SortParams } from '../types/Snippet';
import { PaginatedResponse } from '../types/PaginatedResponse';

const API_URL = 'http://localhost:3000/snippets';

const getSnippets = async ({
  page,
  sortParams,
}: {
  page: number;
  sortParams: SortParams;
}): Promise<PaginatedResponse<Snippet>> => {
  const { views, createdAt } = sortParams;
  const { data } = await axios.get<PaginatedResponse<Snippet>>(API_URL, {
    params: { page, views, createdAt },
  });
  return data;
};

const createSnippet = async ({
  title,
  content,
}: {
  title: string;
  content: Text;
}): Promise<Snippet> => {
  const { data } = await axios.post<Snippet>(`${API_URL}/create`, {
    title,
    content,
  });
  return data;
};

const getSnippetByUuid = async (uuid?: string): Promise<Snippet> => {
  const { data } = await axios.get<Snippet>(`${API_URL}/${uuid}`);
  return data;
};

export { getSnippets, createSnippet, getSnippetByUuid };
