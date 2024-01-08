import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

// Destructure the category and categories prop that we 
// receive from App.js
function Quotes( {quotes, category, categories} ) {

    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                {quotes.map((quote) => (
                    < QuoteCard key={quote.id} quote={quote} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;