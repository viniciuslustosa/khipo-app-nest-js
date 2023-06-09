export function MinutesToTime(minutes: number) {
  const quo = ~~(minutes / 60);
  const rem = minutes % 60;

  return `${quo}h ${rem.toFixed()}min`;
}

export function AddTaskStringHours(array: string[]) {
  let total = 0;
  for (const i in array) {
    const splited = array[i].split(':');
    const minutes = parseInt(splited[0]) * 60 + parseInt(splited[1]);
    total += minutes;
  }

  return MinutesToTime(total);
}

export function AddTaskHours(array: string[]) {
  let total = 0;
  for (const i in array) {
    const splited = array[i].split(':');
    const minutes = parseInt(splited[0]) * 60 + parseInt(splited[1]);
    total += minutes;
  }

  return total / 60;
}

export function TimeToHours(time: string) {
  const splited = time.split(':');

  return `${splited[0]}h ${splited[1]}min`;
}

export function DayOne(): Date {
  const date = new Date(Date.now());
  date.setDate(1);
  return new Date(date);
}
