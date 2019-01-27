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
  it("will calculate the quantity of bundles properly with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let mockBundles = calculator.getBundleQuantity(MockMeasurements);
    expect(mockBundles).toEqual(90);
    MockMeasurements.wasteFactor = 0.1;
    mockBundles = calculator.getBundleQuantity(MockMeasurements);
    expect(mockBundles).toEqual(102);
  });
});
