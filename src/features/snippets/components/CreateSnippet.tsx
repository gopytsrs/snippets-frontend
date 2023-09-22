import { createSnippet } from '../services/snippetService';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, Label, Textarea, Button, TextInput } from 'flowbite-react';

interface IFormInput {
  title: string;
  content: string;
}

const CreateSnippet = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await createSnippet(data);
    navigate('/');
  };

  return (
    <Card className='w-4/6'>
      <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='mb-2 block'>
            <Label className='text-md' htmlFor='comment' value='Snippet title:' />
          </div>
          <TextInput
            id='base'
            sizing='md'
            type='text'
            placeholder='Enter title here...'
            {...(register('title'), { required: true })}
          />
        </div>
        <div className='mt-4' id='textarea'>
          <div className='mb-2 block'>
            <Label className='text-md' htmlFor='comment' value='Snippet content:' />
          </div>
          <Textarea
            id='comment'
            placeholder='Enter content here...'
            rows={8}
            {...(register('content'), { required: true })}
          />
        </div>
        <Button type='submit' className='mt-4 w-1/4 self-center'>
          Create Snippet
        </Button>
      </form>
    </Card>
  );
};

export default CreateSnippet;
