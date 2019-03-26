import formatter from "../formatter";

const mockNum = 30205.1;

it("will format the number correctly", () => {
  let mockFormatted = formatter.money(mockNum);
  expect(mockFormatted).toEqual("30,205.10");
});
