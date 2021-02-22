import dateIsToday from 'dayjs/plugin/isToday';
import dayjs from 'dayjs';

dayjs.extend(dateIsToday);

export const isToday = (date: number) => {
  return dayjs(date).isToday();
};
