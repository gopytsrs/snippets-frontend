import { createSnippet } from '../services/snippetService';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Card, Label, Textarea, Button, TextInput } from 'flowbite-react';

interface IFormInput {
  title: string;
  content: string;
}

const CreateSnippet = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

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
          <Controller
            name='title'
            control={control}
            rules={{
              required: { value: true, message: 'Title is required' },
              minLength: { value: 2, message: 'Title should be at least 2 characters' },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                color={errors.title && 'failure'}
                helperText={errors.title && errors.title.message}
                id='base'
                sizing='md'
                type='text'
                placeholder='Enter title here...'
              />
            )}
          />
        </div>
        <div className='mt-4' id='textarea'>
          <div className='mb-2 block'>
            <Label className='text-md' htmlFor='content' value='Snippet content:' />
          </div>
          <Controller
            name='content'
            control={control}
            rules={{
              required: { value: true, message: 'Content is required' },
              minLength: { value: 4, message: 'Content should be at least 2 characters' },
            }}
            render={({ field }) => (
              <Textarea
                {...field}
                color={errors.content && 'failure'}
                helperText={errors.content && errors.content.message}
                id='content'
                placeholder='Enter content here...'
                rows={8}
              />
            )}
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
