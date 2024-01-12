import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

function FavoriteQuotes ( {favoriteQuotes, maxFaves, removeFromFavorites} ) {

    return (
        <section className="favorite-quotes">
          <div className="wrapper quotes">
            <h3>Top 3 favorite quotes</h3>
              {favoriteQuotes.length > 0 
                && <ul>
                    {favoriteQuotes.map((quote) => (
                        <FavoriteQuoteCard key={quote.id} quote={quote} removeFromFavorites={removeFromFavorites}/>
                    ))}
                    </ul>}
              <div className="favorite-quotes-description">
                {favoriteQuotes.length === 0 && (<p>You can add 3 more quotes to your top three favorites by selecting from the options below. Once you choose, they will appear here.</p>)}
                {favoriteQuotes.length === 1 && (<p>You can add 2 more quotes to your top three favorites by selecting from the options below.</p>)}
                {favoriteQuotes.length === 2 && (<p>You can add 1 more quote to your top three favorites by selecting from the options below.</p>)}
                {favoriteQuotes.length === 3 && (<p></p>)}
              </div>
          </div>
        </section>
    );
};

export default FavoriteQuotes;