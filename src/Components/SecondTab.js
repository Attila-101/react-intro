import React, { useState } from "react";
import axios from "axios";

/* fetchig API data using Axios */
function SecondTab() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content)
      setQuote(res.data.content)
    }).catch(err => {
      console.log(err)
    })
  }

/* getting a quote and displaying it by pressing a button */
return (
<div class="quote">
  <button onClick={getQuote}>Get Quote</button>
  { quote && <p>{quote}</p>}
  </div>
)
};
  


export default SecondTab;


  