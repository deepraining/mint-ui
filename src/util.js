/* eslint-disable import/prefer-default-export */

/**
 * make slots for picker
 * @param items
 * @param divider
 * @param firstValue
 * @param secondValue
 * @returns {*}
 */
export const makePickerSlots = ({
  items,
  divider,
  firstValue,
  secondValue,
}) => {
  const slots = [];
  const valuesCollection = [];
  const initResult = [];
  if (!items || !items.length) return { slots, valuesCollection, initResult };

  const firstValues = items.map(i => i.value);
  slots.push({
    flex: 1,
    values: firstValues,
  });
  valuesCollection.push(firstValues);
  initResult.push(firstValues[0]);

  const secondItems = firstValue
    ? items.find(i => i.value === firstValue).children
    : items[0].children;

  if (!secondItems || !secondItems.length)
    return { slots, valuesCollection, initResult };

  if (divider)
    slots.push({
      divider: true,
      content: '-',
    });

  const secondValues = secondItems.map(i => i.value);
  slots.push({
    flex: 1,
    values: secondValues,
  });
  valuesCollection.push(secondValues);
  initResult.push(secondValues[0]);

  const thirdItems = secondValue
    ? secondItems.find(i => i.value === secondValue).children
    : secondItems[0].children;

  if (!thirdItems || !thirdItems.length)
    return { slots, valuesCollection, initResult };

  if (divider)
    slots.push({
      divider: true,
      content: '-',
    });

  const thirdValues = thirdItems.map(i => i.value);
  slots.push({
    flex: 1,
    values: thirdValues,
  });
  valuesCollection.push(thirdValues);
  initResult.push(thirdValues[0]);

  return { slots, valuesCollection, initResult };
};
