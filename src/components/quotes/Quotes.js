import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({quotes}) {

    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                {quotes.map((quote) => (
                    < QuoteCard key={quote.id} quote={quote} categories={categories} category={category} />
                ))}
            </div>
        </section>
    );
}

export default Quotes;