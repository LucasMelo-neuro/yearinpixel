import { eachDayOfInterval, format } from 'date-fns';

export interface MonthObject {
  [month: string]: { [date: string]: number };
}

export interface UserI {
  name: string;
  year: MonthObject;
}

export function createObjectByMonths(startDate: Date, endDate: Date): MonthObject {
  const datesArray = eachDayOfInterval({ start: startDate, end: endDate });

  const objectByMonths: MonthObject = {};
  datesArray.forEach((date) => {
    const monthKey = format(date, 'MMMM');
    const formattedDate = format(date, 'yyyy-MM-dd');

    if (!objectByMonths[monthKey]) {
      objectByMonths[monthKey] = {};
    }

    // Inicializa o valor como 0
    objectByMonths[monthKey][formattedDate] = 0;
  });

  return objectByMonths;
}