export const incrementNumberWithinRange = (number, increment, maxNumber) => {
  const newNumber = number + increment
  if (newNumber > maxNumber) return maxNumber
  return newNumber
}
