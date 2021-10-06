export const currentDate = () => new Date().toLocaleDateString("en-CA");

export const prevDate = (days) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toLocaleDateString("en-CA");
};
