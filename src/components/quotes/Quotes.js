import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

// Destructure the category and categories prop that we 
// receive from App.js
function Quotes( {filteredQuotes, category, categories, handleCategoryChange} ) {

    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="category-header">
                    <h2>Pick your Favorite Quotes Below</h2>
                    <p>Browse through your collection of quotes</p>
                    {/*Pass category state and categories array passed from App*/}
                    <CategoryForm category={category} categories={categories} handleCategoryChange={handleCategoryChange}/>
                </div>
                {filteredQuotes.map((quote) => (
                    < QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;