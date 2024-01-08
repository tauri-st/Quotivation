import React from "react";
import { Filter } from "react-feather";

//Destructure category state and categories arrays
function CategoryForm ( {category, categories, handleCategoryChange} ) {
    return (
        <div className='category-form'>
            <form className='category-filter'>
                <Filter />
                <label htmlFor='category'>Filter Quotes:</label>
                {/*Set value to category state passed from App*/}
                <select id='category' name='category' value={category} onChange={handleCategoryChange}>
                {categories.map((item) => (
                    <option value={item.key}>{item}</option>
                ))}
                </select>
            </form>
        </div>
    )
};

export default CategoryForm;