import calculator from "../roofingCalculator";

describe("Roofing Quantity Calculator", () => {
  let MockMeasurements = {
    roof: {
      pitch: [
        {
          area: 3000
        }
      ],
      ridges_hips: {
        length: 100
      },
      gutters_eaves: {
        length: 120
      },
      rakes: {
        length: 100
      },
      step_flashing: {
        length: 10
      }
    },
    wasteFactor: 0
  };

  it("will calculate the quantity of squares properly with mock data", () => {
    let mockSquares = calculator.getNumberOfSquares(MockMeasurements);
    expect(mockSquares).toEqual(35);
  });
  it("will calculate the quantity of bundles properly with mock data", () => {
    let mockBundles = calculator.getBundleQuantity(MockMeasurements);
    expect(mockBundles).toEqual(105);
  });
  it("will calculate the quantity of shingles with mock data", () => {
    let mockShingles = calculator.getShinglesQuantity(MockMeasurements);
    expect(mockShingles).toEqual(3045);
  });
  it("will calculate the quantity of nails with mock data", () => {
    let mockNails = calculator.getNailsQuantity(MockMeasurements);
    expect(mockNails).toEqual(6);
  });
  it("will calculate the quantity of cap shingles with mock data", () => {
    let mockCapShingles = calculator.getCapShinglesQuantity(MockMeasurements);
    expect(mockCapShingles).toEqual(198);
  });
  it("will calculate the quantity of underlayment with mock data", () => {
    let underlayment = calculator.getUnderlaymentQuantity(MockMeasurements);
    expect(underlayment).toEqual(35);
  });
  it("will calculate the quantity of gutters with mock data", () => {
    let gutters = calculator.getGuttersQuantity(MockMeasurements);
    expect(gutters).toEqual(138);
  });
  it("will calculate the quantity of rakes with mock data", () => {
    let rakes = calculator.getRakesQuantity(MockMeasurements);
    expect(rakes).toEqual(11);
  });
  it("will calculate the quantity of flashing with mock data", () => {
    let flashing = calculator.getFlashingQuantity(MockMeasurements);
    expect(flashing).toEqual(3);
  });
  it("will calculate the quantity of step flashing with mock data", () => {
    let stepFlashing = calculator.getStepFlashingQuantity(MockMeasurements);
    expect(stepFlashing).toEqual(28);
  });
  it("will calculate the quantity of roofing quantities with mock data", () => {
    MockMeasurements.wasteFactor = 0;
    let quantities = calculator.getRoofingProductQuantities(MockMeasurements);
    expect(quantities.shingles).toEqual(3045);
    expect(quantities.nails).toEqual(6);
    expect(quantities.ridgeCaps).toEqual(198);
    expect(quantities.dripEdge).toEqual(149);
    expect(quantities.underlayment).toEqual(35);
  });
});
