import { Alert, Card, Spinner } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSnippetByUuid } from '../services/snippetService';
import CalendarIcon from '../../../common/icons/CalendarIcon';
import EyeIcon from '../../../common/icons/EyeIcon';
import { formatDisplayDate } from '../../../utils/dateUtil';

const SingleSnippet = () => {
  const { uuid } = useParams();
  const { isLoading, isError, data } = useQuery({
    queryKey: ['snippet', uuid],
    queryFn: () => getSnippetByUuid(uuid),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Alert color='failure'>Failed to fetch the snippets! Please try again later. </Alert>;
  }

  return (
    <Card className='flex flex-col w-5/6 sm:w-4/6'>
      <div className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white'>
        <p>{data.title}</p>
      </div>
      <div className='font-normal text-2xl bg-gray-100 text-gray-700 dark:text-gray-400'>
        <p className='whitespace-pre-wrap'>{data.content}</p>
      </div>
      <div className='mt-2 flex flex-row justify-between'>
        <div className='grid-cols-1'>
          <div className='flex gap-2 items-center text-sm'>
            <CalendarIcon />
            <p>Created:</p>
            <p>{formatDisplayDate(data.createdAt)}</p>
          </div>
          <div className='mt-1 flex gap-2 items-center text-sm'>
            <CalendarIcon />
            <p>Expires:</p>
            <p>{formatDisplayDate(data.expiresAt)}</p>
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <EyeIcon />
          <p>{data.views} </p>
        </div>
      </div>
    </Card>
  );
};

export default SingleSnippet;
