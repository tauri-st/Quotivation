import React from "react";
import { Filter } from "react-feather";

//Destructure category state and categories arrays
function CategoryForm ( {category, categories} ) {
    return (
        <div className='category-form'>
            <form className='category-filter'>
                <Filter />
                <label htmlFor='category'>Filter Quotes:</label>
                {/*Set value to category state passed from App*/}
                <select id='category' name='category' value="category">
                {categories.map((item) => (
                    <option value={key}>{item}</option>
                ))}
                </select>
            </form>
        </div>
    )
};

export default CategoryForm;