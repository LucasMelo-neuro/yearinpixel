import { eachDayOfInterval, format, parseISO } from 'date-fns';

export interface MonthObject {
  [month: string]: { [date: string]: number };
}

export interface UserI {
  name: string;
  year: MonthObject;
}

export function createObjectByMonths(): MonthObject {
  const datesArray = eachDayOfInterval({ start: 
    parseISO('2024-01-01'), end: parseISO('2024-12-31') });

  const objectByMonths: MonthObject = {};
  datesArray.forEach((date, index) => {
    const monthKey = format(date, 'MMMM');
    const formattedDate = format(date, 'yyyy-MM-dd');

    if (!objectByMonths[monthKey]) {
      objectByMonths[monthKey] = {};
    }

    objectByMonths[monthKey][formattedDate] = 0;
  });

  return objectByMonths;
}

export function countValuesOverall(obj: MonthObject): { [value: number]: number } {
  const valuesCount: { [value: number]: number } = {};

  Object.keys(obj).forEach((month) => {
    const monthData = obj[month];

    Object.keys(monthData).forEach((date) => {
      const value = monthData[date];

      if (valuesCount[value]) {
        valuesCount[value]++;
      } else {
        valuesCount[value] = 1;
      }
    });
  });

  return valuesCount;
}