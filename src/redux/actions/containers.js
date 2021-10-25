export const ALL_CONTAINERS = 'ALL_CONTAINERS';

export const getAllContainers = (containers) => ({
  type: ALL_CONTAINERS,
  containers,
});

export default getAllContainers;
