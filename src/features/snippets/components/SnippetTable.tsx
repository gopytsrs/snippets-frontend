import { Table, Spinner, Alert, Pagination } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { getSnippets } from '../services/snippetService';
import SnippetTableRow from './SnippetTableRow';
import SnippetTableHeaders from './SnippetTableHeaders';
import { useState } from 'react';

const SnippetTable = () => {
  const [page, setPage] = useState(1);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['snippets', page],
    queryFn: () => getSnippets({ page }),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return <Alert color='failure'>Failed to fetch the snippets! Please try again later. </Alert>;
  }

  return (
    <>
      <Table className='w-full' hoverable striped>
        <SnippetTableHeaders />
        <Table.Body>{data.data.map(SnippetTableRow)}</Table.Body>
      </Table>
      <Pagination
        currentPage={page}
        onPageChange={(page) => setPage(page)}
        showIcons
        totalPages={data.total / 10}
      />
    </>
  );
};

export default SnippetTable;
