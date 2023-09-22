import TopNav from './components/TopNav';
import SnippetTable from './components/SnippetTable';

const Snippets = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <TopNav />
      <SnippetTable />
    </div>
  );
};

export default Snippets;
