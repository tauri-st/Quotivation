import React from "react";
import QuoteCard from "./QuoteCard";

function Quotes({quotes}) {

    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                {JSON.stringify(quotes)}
            </div>
        </section>
    );
}

export default Quotes;