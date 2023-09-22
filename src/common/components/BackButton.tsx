import { Button } from 'flowbite-react';
import BackIcon from '../icons/BackIcon';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <BackIcon />
      </Button>
    </>
  );
};

export default BackButton;
