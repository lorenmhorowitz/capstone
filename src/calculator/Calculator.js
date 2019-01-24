// Quantity Calculator
// Calculates the quantity of each building material

const getSquares = squareFootage => {
  return Math.ceil(squareFootage / 100);
};

// Shingles
const findBundles = squareFootage => {
  // Industry standard of 3 bundles per square
  return getSquares(squareFootage) * 3;
};

const findShingles = squareFootage => {
  // Industry standard of 29 shingles per bundle
  return findBundles(squareFootage) * 29;
};

const findShingleNails = squareFootage => {
  const nailsPerSquare = 320 / 100;
  const nails = nailsPerSquare * squareFootage;
  return nails;
};
// Ridges and Hips
const findCapShingles = () => {
  const overlap = 12 / 7;
  const capShingles = 100 * overlap;
  return capShingles;
};
// Underlayment

// Gutters and Eaves

// Rake

// Flashing

// Step flashing

export default {
  getSquares,
  findCapShingles,
  findShingleNails,
  findBundles,
  findShingles
};
