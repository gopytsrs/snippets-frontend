import { formatDistance } from 'date-fns';

const formatTimeAgo = (date: string): string => {
  return formatDistance(Date.parse(date), new Date(), { addSuffix: true });
};

export { formatTimeAgo };
