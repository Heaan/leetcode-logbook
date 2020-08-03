export const xGetHint = (secret: string, guess: string): string => {
  let bulls = 0,
    cows = 0;
  const bucket = new Array(10).fill(0);
  const len = secret.length;

  for (let i = 0; i < len; i++) {
    if (secret[i] !== guess[i]) {
      bucket[+secret[i]]++;
      bucket[+guess[i]]--;
    } else bulls++;
  }
  for (let j = 0; j < 10; j++) {
    if (bucket[j] > 0) cows += bucket[j];
  }
  cows = len - cows - bulls;

  return `${bulls}A${cows}B`;
};

console.info(xGetHint('3120', '0111'));
