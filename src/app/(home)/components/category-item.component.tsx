import { FunctionComponent } from "react";

import Category from "@/types/category.type";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    // style={{background: `url('${category.imageUrl}')`}}
    <div
      className="flex items-center justify-center w-full h-full bg-center bg-cover rounded-xl shadow-xl cursor-pointer"
      style={{
        backgroundImage: `url('${category.imageUrl}')`,
        height: "200px",
      }}
    >
      {/* Conteúdo da sua div aqui */}

      {/* category-item-container */}
      <Link href={"/explore"}>
        <div className="bg-neutral-600 bg-opacity-70 text-white text-center p-3 mb-2 mt-2 rounded-xl shadow-lg transition-opacity duration-500 ease cursor-pointer hover:bg-zinc-400 border-black">
          {/* category-name */}
          <p>{category.displayName}</p>
          <p>Explorar</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
