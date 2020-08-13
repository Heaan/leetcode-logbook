const xMaxSatisfaction = (satisfaction: number[]): number => {
  const menu = [...satisfaction].sort((a, b) => a - b);
  const len = satisfaction.length;
  let loveTime: number = 0;

  for (let i = 0; i < len; i++) {
    let temp: number = 0;
    let time: number = 1;
    for (let j = i; j < len; j++) {
      temp += time++ * menu[j];
    }
    loveTime = Math.max(loveTime, temp);
  }

  return loveTime;
};

export default xMaxSatisfaction;
