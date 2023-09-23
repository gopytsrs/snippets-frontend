import BackButton from '../../../common/components/BackButton';
import SingleSnippet from '../components/SingleSnippet';
import NavContainer from '../containers/NavContainer';

const SnippetPage = () => {
  return (
    <NavContainer>
      <BackButton />
      <SingleSnippet />
    </NavContainer>
  );
};

export default SnippetPage;
