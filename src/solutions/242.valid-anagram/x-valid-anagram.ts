export const xIsAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const map: number[] = new Array(26);

  for (let c of s) {
    const n = c.charCodeAt(0) - 97;
    if (map[n]) {
      map[n] += 1;
    } else map[n] = 1;
  }
  for (let c of t) {
    const n = c.charCodeAt(0) - 97;
    if (!map[n]) return false;
    map[n] -= 1;
  }
  return true;
};

console.info(xIsAnagram('aabbb', 'aaabb'));
