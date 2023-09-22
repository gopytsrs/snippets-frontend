import axios from 'axios';
import { Snippet } from '../types/Snippet';

const API_URL = 'http://localhost:3000/snippets';

const getSnippets = async (): Promise<Snippet[]> => {
  const { data } = await axios.get<Snippet[]>(API_URL);
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
