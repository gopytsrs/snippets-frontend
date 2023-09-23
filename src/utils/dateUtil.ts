import { formatDistance, formatDistanceToNow, formatRFC7231 } from 'date-fns';

const formatTimeAgo = (date: string): string => {
  return formatDistance(Date.parse(date), new Date(), { addSuffix: true });
};

const formatDisplayDate = (date: string): string => {
  return formatRFC7231(Date.parse(date));
};

const formatTimeTill = (date: string) => {
  return formatDistanceToNow(Date.parse(date), { addSuffix: true });
};

export { formatTimeAgo, formatDisplayDate, formatTimeTill };
