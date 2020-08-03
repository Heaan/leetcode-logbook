export const xLongestPalindrome = (s: string) => {
  const map: number[] = [];
  const len = s.length;
  let num: number;
  for (let i = 0; i < len; i++) {
    const c = s.charCodeAt(i) - 65;
    if (map[c]) map[c]++;
    else map[c] = 1;
  }
  num = map.reduce((acc, cur) => {
    if (cur != null && cur !== 1) {
      acc += ~~(cur / 2) * 2;
    }
    return acc;
  }, 0);

  return num < len ? num + 1 : num;
};

xLongestPalindrome('Aabccccdd');
