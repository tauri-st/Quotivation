import React from "react";
import { Filter } from "react-feather";

//Destructure category state and categories arrays
function CategoryForm ( {category, categories} ) {
    return (
        <div className='category-form'>
            <form className='category-filter'>
                <Filter />
                <label htmlFor='category'>Filter Quotes:</label>
                <select id='category' name='category'>
                </select>
            </form>
        </div>
    )
};

export default CategoryForm;