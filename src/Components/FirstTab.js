import React, { useState, useEffect } from "react";
const FirstTab = () => {
  const [data, setData] = useState([]);
/* fetching data from the API using fetch method */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://apis.is/currency/m5',
      );
      const json = await res.json();
      setData(json.results);
    };
    fetchData();
  }, [setData]);

  function refreshPage() {
    window.location.reload(false);
  }

  /* refreshing page upon pressing the button */
  return (
    <div className="FirstTab">
      <div>
      <button onClick={refreshPage}>Click to reload</button>
    </div>
      <ul>
      {data.map(item => (
          <p>1 {item.shortName} = {item.value} ISK</p>
      ))}
    </ul>
    </div>
    
  );
};
export default FirstTab;

