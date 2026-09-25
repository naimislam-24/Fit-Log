export const getAllCard = async () => {
  const red = await fetch("http://localhost:4000/card");
  const data = await red.json();
  return data;
};
