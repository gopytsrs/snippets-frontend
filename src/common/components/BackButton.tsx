import { Button, Tooltip } from 'flowbite-react';
import BackIcon from '../icons/BackIcon';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Tooltip content='Go back'>
      <Button onClick={() => navigate(-1)}>
        <BackIcon />
      </Button>
    </Tooltip>
  );
};

export default BackButton;
