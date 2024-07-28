export const createIndex = (
  currentIndex: number,
  collectionLength: number
): number => {
  const index = Math.floor(Math.random() * collectionLength);

  if (index === currentIndex) {
    return createIndex(currentIndex, collectionLength);
  }

  return index;
};
