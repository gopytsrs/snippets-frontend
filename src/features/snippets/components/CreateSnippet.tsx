import { createSnippet } from '../services/snippetService';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { Card, Label, Textarea, Button, TextInput } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IFormInput {
  title: string;
  content: string;
  expiryInMinutes: number;
}

const CreateSnippet = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: {
      title: '',
      content: '',
      expiryInMinutes: 5,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await createSnippet(data);
      toast('✅ Snippet created successfully!');
      reset();
    } catch (err) {
      toast.error("❌ Couldn't create snippet! Something went wrong, try again later");
    }
  };

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
      <Card className='w-5/6 sm:w-4/6'>
        <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='mb-2 block'>
              <Label className='text-md' htmlFor='title' value='Snippet title:' />
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
                  id='title'
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
          <div>
            <div className='mt-3 mb-2 block'>
              <Label className='text-md' htmlFor='expiryInMinutes' value='Expires in (minutes):' />
            </div>
            <Controller
              name='expiryInMinutes'
              control={control}
              rules={{
                required: { value: true, message: 'Expiry is required' },
                min: { value: 5, message: 'Expiry should be at least 5 minute' },
              }}
              render={({ field }) => (
                <TextInput
                  {...field}
                  color={errors.expiryInMinutes && 'failure'}
                  helperText={errors.expiryInMinutes && errors.expiryInMinutes.message}
                  id='expiryInMinutes'
                  sizing='md'
                  type='number'
                  defaultValue={5}
                />
              )}
            />
          </div>
          <Button
            type='submit'
            className='mt-4 w-1/2 sm:w-1/4 self-center'
            disabled={isSubmitting}
            isProcessing={isSubmitting}
          >
            Create Snippet
          </Button>
        </form>
      </Card>
    </>
  );
};

export default CreateSnippet;
