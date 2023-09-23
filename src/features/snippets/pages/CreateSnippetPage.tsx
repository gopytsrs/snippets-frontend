import BackButton from '../../../common/components/BackButton';
import CreateSnippet from '../components/CreateSnippet';
import NavContainer from '../containers/NavContainer';

const CreateSnippetPage = () => {
  return (
    <NavContainer>
      <BackButton />
      <CreateSnippet />
    </NavContainer>
  );
};

export default CreateSnippetPage;
