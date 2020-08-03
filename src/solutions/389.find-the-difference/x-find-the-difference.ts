export const xFindTheDifference = (s: string, t: string): string => {
  const len = t.length;
  let code: number = 0;

  for (let i = 0; i < len; i++) {
    code ^= s.charCodeAt(i) ^ t.charCodeAt(i);
  }

  return String.fromCharCode(code);
};

xFindTheDifference('abbd', 'adbdb');
