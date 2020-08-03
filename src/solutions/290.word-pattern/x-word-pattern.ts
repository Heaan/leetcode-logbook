/**
 * 一个哈希表的解法
 * 可用两个哈希表解决
 * @param pattern 匹配规则
 * @param str 目标字符串
 */
export const xWordPattern = (pattern: string, str: string): boolean => {
  const words = str.split(' ');

  if (pattern.length !== words.length) return false;

  const map: Map<string | number, string | number> = new Map();
  const len = words.length;

  for (let i = 0; i < len; i++) {
    const code = pattern.charCodeAt(i);

    if (
      (map.has(code) && map.get(code) !== words[i]) ||
      (map.has(words[i]) && map.get(words[i]) !== code)
    )
      return false;

    map.set(code, words[i]);
    map.set(words[i], code);
  }

  return true;
};

console.warn(xWordPattern('abba', 'dog dog dog dog'));
console.warn(xWordPattern('', 'b a a b'));
