// Quantity Calculator
// Calculates the quantity of each building material

// Find number of 100 foot squares
const getNumberOfSquares = Measurements => {
  // Industry standard of 100 square feet per square
  return Math.ceil(
    getWasteFactorAdjustedMeasurements(Measurements).squareFootage / 100
  );
};

const getWasteFactorAdjustedMeasurements = Measurements => {
  const squareFootage = Measurements.roof.pitch[0].area;
  const ridgeLength = Measurements.roof.ridges_hips.length;
  const gutterLength = Measurements.roof.gutters_eaves.length;
  const rakeLength = Measurements.roof.rakes.length;
  const wasteFactor = 0.15;
  const stepFlashing = Measurements.roof.step_flashing.length;
  return {
    squareFootage: squareFootage + squareFootage * wasteFactor,
    ridgeLength: ridgeLength + ridgeLength * wasteFactor,
    gutterLength: gutterLength * (1 + wasteFactor),
    rakeLength: rakeLength * (1 + wasteFactor),
    wasteFactor: wasteFactor,
    length: stepFlashing + stepFlashing * wasteFactor
  };
};

// Bundles
const getBundleQuantity = Measurements => {
  // Industry standard of 3 bundles per square
  return getNumberOfSquares(Measurements) * 3;
};

// Shingles
const getShinglesQuantity = Measurements => {
  // Industry standard of 29 shingles per bundle
  return getBundleQuantity(Measurements) * 29;
};

const getNailsQuantity = Measurements => {
  return Math.ceil(
    (getShinglesNailsQuantity(Measurements) +
      getUnderlaymentNailsQuantity(Measurements)) /
      3150
  );
};

// Nails for shingle
const getShinglesNailsQuantity = Measurements => {
  // Industry standard of 320 nails per square
  return 320 * getNumberOfSquares(Measurements);
};
// Ridges and Hips
const getCapShinglesQuantity = Measurements => {
  // Overlap of 5 inches per shingle, 12-5 = 7
  return Math.ceil(
    (12 *
      Math.ceil(getWasteFactorAdjustedMeasurements(Measurements).ridgeLength)) /
      7
  );
};

// Underlayment
const getUnderlaymentQuantity = Measurements => {
  // Industry standard of 3 feet by 33 feet, 3x33 = 99
  return Math.ceil(
    getWasteFactorAdjustedMeasurements(Measurements).squareFootage / 99
  );
};

// Underlayment Nails
const getUnderlaymentNailsQuantity = Measurements => {
  // Assuming 2 nails per square foot
  return (
    2 *
    Math.ceil(getWasteFactorAdjustedMeasurements(Measurements).squareFootage)
  );
};

// Gutters and Eaves
const getGuttersQuantity = Measurements => {
  // Returning the length of the Gutter and Eave
  // Sold per foot
  return Math.ceil(
    getWasteFactorAdjustedMeasurements(Measurements).gutterLength
  );
};

// Rake
const getRakesQuantity = Measurements => {
  // Industry standard of 10.5 feet
  return Math.ceil(
    getWasteFactorAdjustedMeasurements(Measurements).rakeLength / 10.5
  );
};

// Flashing
const getFlashingQuantity = Measurements => {
  // Industry standard of 50 feet
  return Math.ceil(
    getWasteFactorAdjustedMeasurements(Measurements).ridgeLength / 50
  );
};

// Step flashing
const getStepFlashingQuantity = Measurements => {
  // Assume 7 inch with 2 inch overlap overlap, 12-7 = 5
  return Math.ceil(
    (getWasteFactorAdjustedMeasurements(Measurements).length * 12) / 5
  );
};

const getRoofingProductQuantities = Measurements => {
  return {
    shingles: getBundleQuantity(Measurements),
    nails: getNailsQuantity(Measurements),
    ridgeCaps: getCapShinglesQuantity(Measurements),
    dripEdge: getRakesQuantity(Measurements) + getGuttersQuantity(Measurements),
    underlayment: getUnderlaymentQuantity(Measurements)
  };
};

export default {
  getBundleQuantity,
  getCapShinglesQuantity,
  getFlashingQuantity,
  getGuttersQuantity,
  getNailsQuantity,
  getNumberOfSquares,
  getRakesQuantity,
  getRoofingProductQuantities,
  getShinglesQuantity,
  getStepFlashingQuantity,
  getUnderlaymentQuantity,
  getWasteFactorAdjustedMeasurements
};
