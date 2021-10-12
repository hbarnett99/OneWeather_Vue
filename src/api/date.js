/**
 * Return the current date as a YYYY-MM-DD string
 *
 * @returns Current date
 */
export const currentDate = () => new Date().toLocaleDateString("en-CA");

/**
 * Return a previous date as a YYYY-MM-DD string
 *
 * @param {number} days Days to subtract
 * @returns Previous date
 */
export const prevDate = (days) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toLocaleDateString("en-CA");
};
