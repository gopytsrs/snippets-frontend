import { Table, Spinner, Alert, Pagination } from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { getSnippets } from '../services/snippetService';
import SnippetTableRow from './SnippetTableRow';
import { useState } from 'react';
import { SortParams, OrderKey, SortOrder } from '../types/Snippet';
import UpIcon from '../../../common/icons/UpIcon';
import DownIcon from '../../../common/icons/DownIcon';

const SnippetTable = () => {
  const [page, setPage] = useState(1);
  const [sortParams, setSortParams] = useState<SortParams>({});

  const toggleSort = (orderKey: OrderKey) => {
    if (!sortParams[orderKey] || sortParams[orderKey] === SortOrder.ASC) {
      setSortParams({ ...sortParams, [orderKey]: SortOrder.DESC });
    } else if (sortParams[orderKey] === SortOrder.DESC) {
      setSortParams({ ...sortParams, [orderKey]: SortOrder.ASC });
    }
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['snippets', page, sortParams],
    queryFn: () => getSnippets({ page, sortParams }),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
    return <Alert color='failure'>Failed to fetch the snippets! Please try again later. </Alert>;
  }

  return (
    <div className='w-5/6 mx-auto'>
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell onClick={() => toggleSort(OrderKey.CREATED_AT)}>
            <div className='flex items-center'>
              <p className='mr-0.5'>Date added</p>{' '}
              {!sortParams[OrderKey.CREATED_AT] ||
              sortParams[OrderKey.CREATED_AT] === SortOrder.DESC ? (
                <DownIcon />
              ) : (
                <UpIcon />
              )}
            </div>
          </Table.HeadCell>
          <Table.HeadCell onClick={() => toggleSort(OrderKey.VIEWS)}>
            <div className='flex items-center'>
              <p className='mr-0.5'>Views</p>{' '}
              {!sortParams[OrderKey.VIEWS] || sortParams[OrderKey.VIEWS] === SortOrder.DESC ? (
                <DownIcon />
              ) : (
                <UpIcon />
              )}
            </div>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>{data.data.map(SnippetTableRow)}</Table.Body>
      </Table>
      <Pagination
        currentPage={page}
        onPageChange={(page) => setPage(page)}
        showIcons
        totalPages={data.total / 10}
      />
    </div>
  );
};

export default SnippetTable;
