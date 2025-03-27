export const formatDigit = (value?: number) =>
  value ? (value > 9 ? `${value}` : `0${value}`) : `00`
