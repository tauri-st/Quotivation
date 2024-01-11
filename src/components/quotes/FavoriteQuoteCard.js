import React from "react";


//Can also be written as const Component = () => {}
function FavoriteQuoteCard ( {quote, removeFromFavorites} ) {

    return (
        <li className="quote-card">
            <span className="close-quote" onClick={removeFromFavorites}>x</span>
            <h3>{quote.text}</h3>
            <p>{quote.author}</p>
        </li>
    )
};

export default FavoriteQuoteCard;