export const getProperties = async () => {
  const res = await fetch('https://6537ba36a543859d1bb0b7cd.mockapi.io/properties');
  return res.json();
};

export const getProperty = async (id) => {
  const res = await fetch(`https://6537ba36a543859d1bb0b7cd.mockapi.io/properties/${id}`);
  return res.json();
};
