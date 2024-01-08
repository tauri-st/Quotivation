import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

// Destructure the category and categories prop that we 
// receive from App.js
function Quotes( {quotes, category, categories} ) {

    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="category-header">
                    <p>Browse through your collection of quotes</p>
                    {/*Pass category state and categories array passed from App*/}
                    <CategoryForm category={category} categories={categories}/>
                </div>
                {quotes.map((quote) => (
                    < QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;