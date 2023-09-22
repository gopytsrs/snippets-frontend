import { formatDistance, formatRFC7231 } from 'date-fns';

const formatTimeAgo = (date: string): string => {
  return formatDistance(Date.parse(date), new Date(), { addSuffix: true });
};

const formatDisplayDate = (date: string): string => {
  return formatRFC7231(Date.parse(date));
};

export { formatTimeAgo, formatDisplayDate };
