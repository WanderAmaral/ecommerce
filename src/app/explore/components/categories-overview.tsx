'use client'
import { CategoryContext } from "@/contexts/category.context";
import { FunctionComponent, useContext } from "react";

const CategoriesOverview: FunctionComponent = () => {
    const {categories} = useContext(CategoryContext)
    return ( 
    <div className="pt-0 pb-5 pr-10 pl-10">
        {categories.map((category) => (<p key={category.id}>{category.displayName}</p>))}
    </div> 
    );
}
 
export default CategoriesOverview;