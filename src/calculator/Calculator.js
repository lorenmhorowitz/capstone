import Component from "react";

const square = 100;
class Calculator extends Component {
  // Shingles
  findBundles = sqFoot => {
    const bundlesPerSquare = 3 / square;
    const bundles = bundlesPerSquare * sqFoot;
    return bundles;
  };
  findShingles = sqFoot => {
    const shinglesPerBundle = 29;
    const shingles = shinglesPerBundle * sqFoot;
    return shingles;
  };
  findShingleNails = sqFoot => {
    const nailsPerSquare = 320 / square;
    const nails = nailsPerSquare * sqFoot;
    return nails;
  };
  // Ridges and Hips

  // Roll Roofing

  // Gutters and Eaves

  // Rake

  // Flashing

  // Step flashing
}

export default Calculator;
