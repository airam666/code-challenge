export const handleFetchUser = async () => {
  const data = await (
    await fetch("https://api.github.com/search/users?page=1&per_page=10&q=test")
  ).json();

  return data.items;
};
