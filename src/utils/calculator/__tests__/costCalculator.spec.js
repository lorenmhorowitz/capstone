import calculator from "../costCalculator";

const mockData = {
  cost: 3,
  quantity: 15
};

it("will calculate the correct subtotal with mock data", () => {
  let mockSubtotal = calculator.getSubtotal(mockData.cost, mockData.quantity);
  expect(mockSubtotal).toEqual(45);
});
