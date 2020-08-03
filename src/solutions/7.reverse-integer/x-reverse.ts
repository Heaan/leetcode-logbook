const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

export xReverse = (num: number): number => {
  if (num >= -9 && num <= 9) return num;

  const MAX_WARN = ~~(INT_MAX / 10);
  const MIN_WARN = ~~(INT_MIN / 10);
  const queue: number[] = [];

  while (num !== 0) {
    queue.push(num % 10);
    num = ~~(num / 10);
  }

  let n = queue.length - 1;
  for (let i = 0; i < queue.length; i++) {
    if (num > MAX_WARN || (num === MAX_WARN && queue[i] > 7)) {
      return 0;
    }
    if (num < MIN_WARN || (num === MIN_WARN && queue[i] < -8)) {
      return 0;
    }
    num += queue[i] * 10 ** n--;
  }

  return num;
};

console.info(xReverse(7463847412));
