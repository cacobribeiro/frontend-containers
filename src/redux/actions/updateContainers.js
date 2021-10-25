export const ALTER_CONTAINER = 'ALTER_CONTAINER';

export const updateContainers = (key, value) => ({
  type: ALTER_CONTAINER,
  key,
  value,
});
