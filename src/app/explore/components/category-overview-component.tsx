import Category from "@/types/category.type";
import React, { FunctionComponent } from "react";

interface CategoryOverviewProps {
    category: Category,
    
}



const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({category}) => {
    return ( 
        <div className="flex flex-col w-full mt-5">
                <p className=" text-xl font-medium mb-1">{category.displayName}</p>
                <div className="flex w-full justify-between flex-wrap"></div>
        </div>
     );
}
 
export default CategoryOverview;