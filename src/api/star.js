export const STELLAR_URL = "http://localhost:8090/api/objects";

/**
 * Standardised name for star
 *
 * @param {{name:string, designations:string}} star Star
 * @returns Name
 */
export const starName = ({ name, designations }) => name + (designations ?? "");

/**
 * Fetch a stellar object
 *
 * @param {string} name Name of stellar object
 * @returns {Promise<object>} Stellar object
 */
export async function fetchStellar(name) {
  const res = await fetch(`${STELLAR_URL}/info?format=json&name=${name}`);
  return res.json();
}

/**
 * Fetch objects of a type
 *
 * @param {string} type Type of objects
 * @returns {Promise<string[]>} Name of objects
 */
export async function fetchObjectNames(type) {
  const res = await fetch(`${STELLAR_URL}/listobjectsbytype?type=${type}`);
  return res.json();
}

/**
 * Fetch planets
 *
 * @returns {Promise<string[]>} Name of planets
 */
export async function fetchPlanetNames() {
  return fetchObjectNames("SolarSystem:planet");
}

/**
 * Fetch stars
 *
 * @returns {Promise<string[]>} Name of stars
 */
export async function fetchStarNames() {
  return fetchObjectNames("StarMgr");
}

/**
 * Calculate visibility of a star considering weather
 *
 * @param {{ambientLum:number, illumination:number, vmag:number, "above-horizon":boolean}} star Star
 * @param {object} weather Weather object
 * @returns Visibility as a percentage
 */
export const calculateVisibility = (star, weather) => {
  const { ambientLum, illumination, vmag } = star;

  // Cannot see star if it is below horizon
  if (!star["above-horizon"]) {
    return "-";
  }

  // Multiplier applied for brightness
  const brightness = ((illumination ?? 100) / 100) * magnitudeMultiplier(vmag);

  // Ambient light reduces visibility
  const ambient = ambientMultiplier(ambientLum);

  const visibility = ambient * brightness * (1 - calculateBlockage(weather));

  return visibility.toFixed(2);
};

/**
 * Calculate visibility multiplier from ambient luminosity
 *
 * @param {number} amb Ambient luminosity
 * @returns Multiplier
 */
const ambientMultiplier = (amb) => {
  if (amb > 50) return 1; // TODO: Return 0 when done testing
  return Math.min(1, 1 / amb);
};

/**
 * Calculate visibility multiplier from magnitude
 *
 * @param {number} vmag Visibility magnitude
 * @returns Multiplier
 */
const magnitudeMultiplier = (vmag) => {
  if (vmag <= -1) return 100;
  if (vmag > 6.5) return 0;
  return 100 / (vmag + 2);
};

/**
 * Calculate proportion of visibility decrease due to weather
 *
 * @param {object} weather Weather object
 * @returns Multiplier for blockage
 */
const calculateBlockage = (weather) => {
  // Don't calculate without weather information
  if (!weather) {
    return 0;
  }

  const isDay = !!weather.is_day;

  // Assume we can't see stars during day
  if (isDay) {
    // return 0;
  }

  const { will_it_rain, chance_of_rain, chance_of_snow, cloud } =
    weather.condition;

  // Chance of it raining or snowing
  const snowProb = chance_of_snow / 100,
    rainProb = chance_of_rain / 100,
    noSnowProb = 1 - snowProb,
    noRainProb = 1 - rainProb,
    rainSnowProb = snowProb * noRainProb + rainProb * noSnowProb,
    chanceOfVisibility = 1 - (will_it_rain || rainSnowProb);

  // Blocking view due to clouds
  const cloudBlock = cloud > 25 ? 1 : cloud / 25;

  return cloudBlock * chanceOfVisibility;
};

/**
 * Compares stars by name
 *
 * @param {object} s1 Star
 * @param {object} s2 Star
 * @returns Comparison
 */
export const compareName = (s1, s2) => {
  const n1 = starName(s1);
  const n2 = starName(s2);
  if (n1 < n2) return -1;
  if (n1 > n2) return 1;
  return 0;
};

/**
 * Compares stars by name. Reverse of compareName
 *
 * @param {object} s1 Star
 * @param {object} s2 Star
 * @returns Comparison
 */
export const compareName_ = (s1, s2) => -compareName(s1, s2);

/**
 * Returns a comparison function for stars, comparing on visibility
 *
 * @param {object} weather Weather
 * @returns Comparison function
 */
export const compareVis = (weather) => (s1, s2) => {
  const v1 = calculateVisibility(s1, weather);
  const v2 = calculateVisibility(s2, weather);
  const n1 = v1 === "-" ? -1 : Number(v1);
  const n2 = v2 === "-" ? -1 : Number(v2);
  return n1 - n2;
};

/**
 * Returns a comparison function for stars, comparing on visibility. Reverse of compareVis
 *
 * @param {object} weather Weather
 * @returns Comparison function
 */
export const compareVis_ = (weather) => (s1, s2) =>
  -compareVis(weather)(s1, s2);
