import { Table, Spinner, Alert } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { getSnippets } from '../services/snippetService';
import SnippetTableRow from './SnippetTableRow';

const SnippetTableHeaders = () => {
  return (
    <Table.Head>
      <Table.HeadCell>Title</Table.HeadCell>
      <Table.HeadCell>Date created</Table.HeadCell>
      <Table.HeadCell>Views</Table.HeadCell>
    </Table.Head>
  );
};

const SnippetTable = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['snippets'],
    queryFn: getSnippets,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return <Alert color='failure'>Failed to fetch the snippets! Please try again later. </Alert>;
  }
  console.log(data);
  return (
    <Table className='w-full'>
      <SnippetTableHeaders />
      <Table.Body>{data.map(SnippetTableRow)}</Table.Body>
    </Table>
  );
};

export default SnippetTable;
