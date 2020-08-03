const distanceBetween = (v: number[], w: number[]): number => {
  const x = Math.abs(w[0] - v[0]);
  const y = Math.abs(w[1] - v[1]);
  return x ** 2 + y ** 2;
};

const factorialOf = (n: number): number => {
  if (n < 2) return 1;
  return factorialOf(n - 1) + n;
};

export const xNumberOfBoomerangs = (points: number[][]): number => {
  const map: Map<number, number[]> = new Map();
  const size = points.length;
  let count = 0;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      const dist = distanceBetween(points[i], points[j]);
      const vets = map.get(dist);
      if (vets != null) {
        vets.push(i, j);
      } else {
        map.set(dist, [i, j]);
      }
    }
    for (let vets of map.values()) {
      if (vets.length > 2 && vets.includes(i)) {
        const num = vets.reduce((acc, cur) => {
          if (cur === i) acc++;
          return acc;
        }, 0);
        if (num > 1) {
          count += 2 * factorialOf(num - 1);
        }
      }
    }
  }

  return count;
  // return map;
};

const res = xNumberOfBoomerangs([
  [5, 5],
  [4, 7],
  [6, 5],
  [6, 9],
  [3, 7],
  [4, 5],
  [2, 5],
  [4, 4],
  [3, 0],
]);

console.info(res);
