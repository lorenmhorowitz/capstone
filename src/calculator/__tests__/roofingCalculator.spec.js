import calculator from "../roofingCalculator";

describe("Roofing Quantity Calculator", () => {
  let MockMeasurements = {
    squareFootage: 3000,
    ridgeLength: 100,
    gutterLength: 120,
    rakeLength: 100,
    wasteFactor: 0,
    stepFlashing: {
      length: 10
    }
  };
  //   let ExpectedQuantities = {
  //     squares: 30,
  //     bundles: 90,
  //     shingles: 2610,
  //     nails: 15600,
  //     capShingles: 172,
  //     underlayment: 31,
  //     gutters: 120,
  //     rakes: 10,
  //     flashing: 2,
  //     stepFlashing: 24
  //   };
  it("will calculate the quantity of squares properly with mock data", () => {
    let mockSquares = calculator.getNumberOfSquares(MockMeasurements);
    expect(mockSquares).toEqual(30);
    MockMeasurements.wasteFactor = 0.05;
    mockSquares = calculator.getNumberOfSquares(MockMeasurements);
    expect(mockSquares).toEqual(32);
  });
});

// it("will calculate each quantity properly with sample data", () => {
//   const MockMeasurements = {
//     squareFootage: 3000,
//     ridgeLength: 100,
//     gutterLength: 120,
//     rakeLength: 100,
//     wasteFactor: 0,
//     stepFlashing: {
//       length: 10
//     }
//   };
//   const ExpectedQuantities = {
//     squares: 30,
//     bundles: 90,
//     shingles: 2610,
//     nails: 15600,
//     capShingles: 172,
//     underlayment: 31,
//     gutters: 120,
//     rakes: 10,
//     flashing: 2,
//     stepFlashing: 24
//   };
//   const mockSquares = calculator.getNumberOfSquares(MockMeasurements);
//   expect(mockSquares.toequal(ExpectedQuantities.squares));
//   expect(
//     calculator
//       .getBundleQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.bundles)
//   );
//   expect(
//     calculator
//       .getShinglesQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.shingles)
//   );
//   expect(
//     calculator
//       .getNailsQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.nails)
//   );
//   expect(
//     calculator
//       .getCapShinglesQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.capShingles)
//   );
//   expect(
//     calculator
//       .getUnderlaymentQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.underlayment)
//   );
//   expect(
//     calculator
//       .getGuttersQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.gutters)
//   );
//   expect(
//     calculator
//       .getRakesQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.rakes)
//   );
//   expect(
//     calculator
//       .getFlashingQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.flashing)
//   );
//   expect(
//     calculator
//       .getStepFlashingQuantity(MockMeasurements)
//       .toequal(ExpectedQuantities.stepFlashing)
//   );
// });
