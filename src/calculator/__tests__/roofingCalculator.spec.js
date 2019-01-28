import calculator from "../roofingCalculator";

describe("Roofing Quantity Calculator", () => {
  let MockMeasurements = {
    squareFootage: 3000,
    ridgeLength: 100,
    gutterLength: 120,
    rakeLength: 100,
    wasteFactor: 0,
    stepFlashing: 10
  };

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
    expect(mockBundles).toEqual(99);
  });
  it("will calculate the quantity of shingles with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let mockShingles = calculator.getShinglesQuantity(MockMeasurements);
    expect(mockShingles).toEqual(2610);
    MockMeasurements.wasteFactor = 0.1;
    mockShingles = calculator.getShinglesQuantity(MockMeasurements);
    expect(mockShingles).toEqual(2871);
  });
  it("will calculate the quantity of nails with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let mockNails = calculator.getNailsQuantity(MockMeasurements);
    expect(mockNails).toEqual(15600);
    MockMeasurements.wasteFactor = 0.1;
    mockNails = calculator.getNailsQuantity(MockMeasurements);
    console.log(calculator.getNumberOfSquares(MockMeasurements));
    console.log(1 + MockMeasurements.wasteFactor);
    console.log(MockMeasurements.squareFootage * MockMeasurements.wasteFactor);
    expect(mockNails).toEqual(17160);
  });
  it("will calculate the quantity of cap shingles with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let mockCapShingles = calculator.getCapShinglesQuantity(MockMeasurements);
    expect(mockCapShingles).toEqual(172);
    MockMeasurements.wasteFactor = 0.1;
    mockCapShingles = calculator.getCapShinglesQuantity(MockMeasurements);
    expect(mockCapShingles).toEqual(189);
  });
  it("will calculate the quantity of underlayment with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let underlayment = calculator.getUnderlaymentQuantity(MockMeasurements);
    expect(underlayment).toEqual(31);
    MockMeasurements.wasteFactor = 0.1;
    underlayment = calculator.getUnderlaymentQuantity(MockMeasurements);
    expect(underlayment).toEqual(34);
  });
  it("will calculate the quantity of gutters with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let gutters = calculator.getGuttersQuantity(MockMeasurements);
    expect(gutters).toEqual(120);
    MockMeasurements.wasteFactor = 0.1;
    gutters = calculator.getGuttersQuantity(MockMeasurements);
    expect(gutters).toEqual(132);
  });
  it("will calculate the quantity of rakes with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let rakes = calculator.getRakesQuantity(MockMeasurements);
    expect(rakes).toEqual(10);
    MockMeasurements.wasteFactor = 0.1;
    rakes = calculator.getRakesQuantity(MockMeasurements);
    expect(rakes).toEqual(11);
  });
  it("will calculate the quantity of flashing with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let flashing = calculator.getFlashingQuantity(MockMeasurements);
    expect(flashing).toEqual(2);
    MockMeasurements.wasteFactor = 0.1;
    flashing = calculator.getFlashingQuantity(MockMeasurements);
    expect(flashing).toEqual(3);
  });
  // it("will calculate the quantity of step flashing with mock data", () => {
  //   MockMeasurements.wasteFactor = 0;
  //   let stepFlashing = calculator.getStepFlashingQuantity(MockMeasurements);
  //   expect(stepFlashing).toEqual(24);
  //   MockMeasurements.wasteFactor = 0.1;
  //   stepFlashing = calculator.getFlashingQuantity(MockMeasurements);
  //   expect(stepFlashing).toEqual(27);
  // });
});
