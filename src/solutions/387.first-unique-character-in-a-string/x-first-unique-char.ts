export const xFirstUniqChar = (s: string): number => {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
xFirstUniqChar('ac');
