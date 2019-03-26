import calculator from "../../utils/calculator/calculator";
import mockJobsDetailsList from "../../../mocks/mockJobsDetailsList";
import ProductModal from "../ProductModal";
import React from "react";
import { shallow } from "enzyme";

describe("Product modal", () => {
  it("Product modal test successful", () => {
    const currentProduct =
      mockJobsDetailsList.mockJobsDetailsList.results[0].products.roofing
        .shingles[0].products[0];
    const roofingQuantities = calculator.getRoofingProductQuantities(
      mockJobsDetailsList.mockJobsDetailsList.results[0].measurements
    );

    function testClose() {}

    let wrapper = shallow(
      <ProductModal
        brand={currentProduct.brand}
        image={currentProduct.image}
        itemID={currentProduct.itemID}
        model={currentProduct.model}
        name={currentProduct.name}
        open={"false"}
        onClose={testClose}
        otherProducts={currentProduct.otherProducts}
        price={currentProduct.price}
        quantity={currentProduct.quantity}
        roofingQuantity={roofingQuantities}
        weight={currentProduct.weight}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
