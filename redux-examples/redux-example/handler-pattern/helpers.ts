export function updateObject<T extends {}>(
  oldObject: T,
  newValues: Partial<T>,
) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray<T extends { id: string }>(
  array: T[],
  itemId: string,
  updateItemCallback: (item: T) => T,
) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}
