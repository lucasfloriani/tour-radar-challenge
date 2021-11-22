export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;

// * Helper functions and constants created so we don't need
// * to use a date library like date - fns(to reduce bundle size)
export const getDays = (time: number) => Math.floor(time / DAY);
export const getHours = (time: number) => Math.floor((time % DAY) / HOUR);
export const getMinutes = (time: number) => Math.floor((time % HOUR) / MINUTE);
export const getSeconds = (time: number) => Math.floor((time % MINUTE) / SECOND);

export const getTimeDiff = (startDate: Date, endDate: Date) => endDate.getTime() - startDate.getTime();

export const getTimeDiffObj = (startDate: Date, endDate: Date) => {
  const diff = getTimeDiff(startDate, endDate);
  return {
    days: getDays(diff),
    hours: getHours(diff),
    minutes: getMinutes(diff),
    seconds: getSeconds(diff),
  };
};
