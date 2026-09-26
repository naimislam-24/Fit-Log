export const getAllCard = async () => {
  // const red = await fetch("http://localhost:4000/card", {
  const red = await fetch("https://api.api-store.workers.dev/api/fitlog", {
    // next: { revalidate: 10 },
  });
  const data = await red.json();
  return data;
};
