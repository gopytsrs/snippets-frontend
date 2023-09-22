import BackButton from '../../../common/components/BackButton';
import SingleSnippet from '../components/SingleSnippet';
import TopNav from '../components/TopNav';

const SnippetPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center gap-4'>
      <TopNav />
      <BackButton />
      <SingleSnippet />
    </div>
  );
};

export default SnippetPage;
