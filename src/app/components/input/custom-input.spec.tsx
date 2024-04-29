import { getByDisplayValue, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomInput from "./custom-input";

describe("Custom Input", () => {
  it("should render with error if hasError is true", () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    );

    getByPlaceholderText("Lorem Ipsum");

   
  });
});
