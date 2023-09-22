import axios from 'axios';
import { Snippet } from '../types/Snippet';
import { PaginatedResponse } from '../types/PaginatedResponse';

const API_URL = 'http://localhost:3000/snippets';

const getSnippets = async ({ page }: { page: number }): Promise<PaginatedResponse<Snippet>> => {
  const { data } = await axios.get<PaginatedResponse<Snippet>>(API_URL, { params: { page } });
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
