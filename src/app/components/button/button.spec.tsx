import { render } from "@testing-library/react";
import Button from "./button";

describe("Custom Button", () => {
  it("should render with corretc children", () => {
    const { getByText } = render(<Button>test</Button>);

    getByText('test')
  });
});
