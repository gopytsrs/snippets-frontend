import { Table } from 'flowbite-react';
import { Snippet } from '../types/Snippet';
import { formatTimeAgo } from '../../../utils/dateUtil';
import { Link } from 'react-router-dom';

interface Props extends Snippet {}

const SnippetTableRow = ({ uuid, title, createdAt, views }: Props) => {
  return (
    <Table.Row key={uuid}>
      <Table.Cell>
        <Link to={`/snippet/${uuid}`}>{title}</Link>
      </Table.Cell>
      <Table.Cell>{formatTimeAgo(createdAt)}</Table.Cell>
      <Table.Cell>{views}</Table.Cell>
    </Table.Row>
  );
};

export default SnippetTableRow;
