import Category from "@/types/category.type";
import { render } from "@testing-library/react";
import CategoryItem from "./category-item.component";

describe("Category Item", () => {
  it("should render category correctly", () => {
    const category: Category = {
      id: "1",
      displayName: "Lorem Ipsum",
      imageUrl: "image_url",
      name: "lorem-ipsum",
      products: [],
    };

    const {getByText} = render(<CategoryItem category={category} />);

    getByText('Lorem Ipsum')
    getByText('Explorar')
  });
});
