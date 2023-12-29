'use client'
import { CategoryContext } from "@/contexts/category.context";
import { FunctionComponent, useContext } from "react";
import CategoryOverview from "./category-overview-component";

const CategoriesOverview: FunctionComponent = () => {
    const {categories} = useContext(CategoryContext)
    return ( 
    <div className="pt-0 pb-5 pr-10 pl-10">
        {categories.map((category) => <CategoryOverview key={category.id} category={category}/>)}
    </div> 
    );
}
 
export default CategoriesOverview;