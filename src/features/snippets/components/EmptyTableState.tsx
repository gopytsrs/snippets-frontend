import { Table } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const EmptyTableState = () => {
  const navigate = useNavigate();
  return (
    <Table.Row onClick={() => navigate('/snippet/create')} className='cursor-pointer'>
      <Table.Cell className='text-2xl text-center' colSpan={4}>
        No snippets found. Click here or "New Snippet" to create one!
      </Table.Cell>
    </Table.Row>
  );
};

export default EmptyTableState;
