import BackButton from '../../../common/components/BackButton';
import CreateSnippet from '../components/CreateSnippet';
import TopNav from '../components/TopNav';

const CreateSnippetPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center gap-4'>
      <TopNav />
      <BackButton />
      <CreateSnippet />
    </div>
  );
};

export default CreateSnippetPage;
