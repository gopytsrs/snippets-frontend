import { Table } from 'flowbite-react';

const SnippetTableHeaders = () => {
  return (
    <Table.Head>
      <Table.HeadCell>Title</Table.HeadCell>
      <Table.HeadCell>Date created</Table.HeadCell>
      <Table.HeadCell>Views</Table.HeadCell>
    </Table.Head>
  );
};

export default SnippetTableHeaders;
