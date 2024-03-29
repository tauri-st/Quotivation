import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import Message from "./components/Message";
import { Loader } from "react-feather";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState(JSON.parse(window.localStorage.getItem("favoriteQuotes")) || []);
  const [messageText, setMessageText] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  
  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";

  const maxFaves = 3;
  const categories = ["All", "Leadership", "Empathy", 
    "Motivation", "Learning", "Success", "Empowerment"];
  const filteredQuotes = category !== "All" ? quotes.filter(quote =>
    quote.categories.includes(category)) : quotes;
  
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const request = await fetch(quotesUrl);
      const results = await request.json();
      setQuotes(results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // will allow you to add a quote to your favorites by 
  // clicking on the quote card’s heart icon and use quoteId
  // to find that specific quote from the quotes array
  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find((favorite) => selectedQuote.id === favorite.id)

    if (alreadyFavorite === selectedQuote) {
      setMessageText("This quote is already in your favorites! Choose another!")
      setShowMessage(true);
    } else if (favoriteQuotes.length < maxFaves) {
      //Include all quotes already in array and add new quote
      setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
      setMessageText("Added to Favorites!")
      setShowMessage(true);
    } else {
      setMessageText("Max number of Favorite Quotes reached. Please delete one to add another!")
      setShowMessage(true);
    }
  };

  // update the favoriteQuotes state to no longer contain the 
  // quote whose id was passed to the removeFromFavorites 
  // function.
  const removeFromFavorites = (quoteId) => {
    const updatedFavorites = favoriteQuotes.filter((quote) => quote.id !== quoteId);
    setFavoriteQuotes(updatedFavorites);
  };

  const removeMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className='App'>
      {/*Pass the props needed in order to display the message
      text and allow user to dismiss the message */}
      {showMessage && <Message messageText={messageText} removeMessage={removeMessage}/> }
      <Header />
      {/* conditionally render the Loader component if the loading 
      state is set to true – otherwise, log out the quotes 
      array like so: JSON.stringify(quotes) so that we can 
      have a look at what we fetched. Later replace with
      the Quotes component. */}
      {/*Pass the handleCategoryChange to Quotes as a prop, 
      and then from Quotes to CategoryForm. In CategoryForm, 
      destructure it and use it in a onChange event for your 
      select statement.*/}
      <main>
        <FavoriteQuotes favoriteQuotes={favoriteQuotes} maxFaves={maxFaves} removeFromFavorites={removeFromFavorites}/>
        {loading ? < Loader /> : 
          <Quotes 
            filteredQuotes={filteredQuotes} 
            categories={categories} 
            category={category} 
            handleCategoryChange={handleCategoryChange}
            addToFavorites={addToFavorites}
            favoriteQuotes={favoriteQuotes}/>}
      </main>
      <Footer />
    </div>
  );
}
export default App;
