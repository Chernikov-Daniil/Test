export const urlTest = "http://localhost:3100/tests";
export const urlSites = "http://localhost:3100/sites";
export const REG = /\w+:\/*|(w+\.)/gim;

export const searchOptions = (keys) => ({
  shouldSort: true,
  threshold: 0,
  location: 0,
  distance: 100,
  minMatchCharLength: 0,
  keys: [...keys],
});

export const fetchList = async (url) => {
  const responseUsers = await fetch(url);
  return responseUsers.json();
};
