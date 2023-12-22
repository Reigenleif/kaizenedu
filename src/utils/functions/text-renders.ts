export const suffixCounterAdder = (num: number): string => {
  if (num === 0) return "";

  const suffixes = ["", "k", "m", "b", "t"];
  const magnitude = Math.floor(Math.log10(num) / 3);
  const scaledNum = num / Math.pow(10, magnitude * 3);
  const suffix = suffixes[magnitude];
  return `${scaledNum}${suffix}`;
};
