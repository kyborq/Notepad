import { format } from 'date-fns';

export const DATE_FORMAT = 'yyyy.MM.dd';
export const TIME_FORMAT = 'HH:mm';

export const getTimeStamp = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, `${DATE_FORMAT} ${TIME_FORMAT}`);
  return formattedDate;
};
