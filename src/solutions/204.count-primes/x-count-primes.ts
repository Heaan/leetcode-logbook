export const xCountPrimes = (n: number): number => {
  if (n === 0 || n == 1) return 0;
  let m = n - 1;
  let count = 2;
  while (m > 2) {
    for (let i = 2; i * i <= m; i++) {
      if (m % i === 0) {
        count++;
        break;
      }
    }
    m--;
  }

  return n - count;
};

xCountPrimes(100);
