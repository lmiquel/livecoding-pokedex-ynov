export const decrementNumberWithinRange = (number, decrement, minNumber) => {
  const newNumber = number - decrement
  if (newNumber < minNumber) return minNumber
  return newNumber
}
