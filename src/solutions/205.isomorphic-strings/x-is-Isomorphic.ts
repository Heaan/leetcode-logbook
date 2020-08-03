export const xIsIsomorphic = (s: string, t: string): boolean => {
  const len = s.length;
  const map: Map<string | number, string> = new Map();

  for (let i = 0; i < len; i++) {
    const code = s.charCodeAt(i);
    const val = map.get(code);
    if (val != null && val !== t[i]) {
      return false;
    }
    if (val == null) {
      if (map.has(t[i])) return false;
      map.set(code, t[i]);
      map.set(t[i], s[i]);
    }
  }

  return true;
};

console.info(xIsIsomorphic('paper', 'title'));
