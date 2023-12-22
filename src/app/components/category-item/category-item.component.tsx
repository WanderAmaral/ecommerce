import { FunctionComponent } from "react";

import Category from "@/types/category.type";

interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return ( 
        // style={{background: `url('${category.imageUrl}')`}}
        <div className=""> 
            <div className="">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
     );
}
 
export default CategoryItem;