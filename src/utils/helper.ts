export type Pair<F, S> = { first: F; second: S };

export const markPair = <F, S>(first: F, second: S): Pair<F, S> => {
  return { first, second };
};
