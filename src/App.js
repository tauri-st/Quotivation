import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import { Loader } from "react-feather";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  
  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";

  const categories = [("All", "Leadership", "Empathy", 
    "Motivation", "Learning", "Success", "Empowerment")];
  
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

  return (
    <div className='App'>
      <Header />
      {/* conditionally render the Loader component if the loading 
      state is set to true – otherwise, log out the quotes 
      array like so: JSON.stringify(quotes) so that we can 
      have a look at what we fetched. Later replace with
      the Quotes component. */}
      <main>{loading ? < Loader /> : <Quotes quotes={quotes} categories={categories} category={category}/>}</main>
      <Footer />
    </div>
  );
}
export default App;
