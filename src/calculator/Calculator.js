// Quantity Calculator
// Calculates the quantity of each building material

// Find number of 100 foot squares
const getSquares = Measurements => {
  // Industry standard of 100 square feet per square
  return Math.ceil(wasteFactor(Measurements.squareFootage) / 100);
};

// Bundles
const findBundles = Measurements => {
  // Industry standard of 3 bundles per square
  return getSquares(Measurements) * 3;
};

// Shingles
const findShingles = Measurements => {
  // Industry standard of 29 shingles per bundle
  return findBundles(Measurements) * 29;
};

// Nails for shingle
const findShingleNails = Measurements => {
  // Industry standard of 320 nails per square
  return 320 * getSquares(Measurements);
};
// Ridges and Hips
const findCapShingles = Measurements => {
  // Overlap of 5 inches per shingle, 12-5 = 7
  return Math.ceil((12 * wasteFactor(Measurements.ridgeLength)) / 7);
};

// Underlayment
const findUnderlayment = Measurements => {
  // Industry standard of 3 feet by 33 feet, 3x33 = 99
  return Math.ceil(wasteFactor(Measurements.squareFootage) / 99);
};
// Underlayment Nails
const findLaymentNails = Measurements => {
  // Assuming 2 nails per square foot
  return (
    2 *
    Math.ceil(
      wasteFactor(findUnderlayment(Measurements) * Measurements.squareFootage)
    )
  );
};

// Gutters and Eaves
const findGutters = Measurements => {
  // Returning the length of the Gutter and Eave
  // Sold per foot
  return wasteFactor(Measurements.gutterLength);
};
// Rake
const findRakes = Measurements => {
  // Industry standard of 10.5 feet
  return Math.ceil(wasteFactor(Measurements.rakeLength / 10.5));
};
// Flashing
const findFlashing = Measurements => {
  // Industry standard of 50 feet
  return Math.ceil(wasteFactor(Measurements.ridgeLength) / 50);
};
// Step flashing
const findStepFlashing = Measurements => {
  // Assume 7 inch with 2 inch overlap overlap, 12-7 = 5
  return Math.ceil(wasteFactor(Measurements.stepFlashing.length * 12) / 5);
};
// Waste Factor
const wasteFactor = value => {
  // Add percentage of extra materials to accomodate for waste
  // Assume 5% waste factor
  return value + Math.ceil(0.05 * value);
};

export default {
  getSquares,
  findCapShingles,
  findShingleNails,
  findBundles,
  findShingles,
  findStepFlashing,
  findFlashing,
  findRakes,
  findGutters,
  findLaymentNails,
  findUnderlayment
};
