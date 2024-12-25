import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/card"

 function App() {

  const [search, setSearch] = useState("");

  const url = "https://api.sampleapis.com/beers/ale";
  const [data, setData] = useState([]);

  const filterData = data.filter((card) => {
    return card.name.toLowerCase().includes(search.toLowerCase());
  });

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
    <input type="text" className="w-full backdrop-blur-sm z-10 p-2 m-2 fixed pl-10 bg-transparent" placeholder="Search..."
    onChange={(e) => {
      setSearch(e.target.value);
    }} />
    <div className="flex flex-wrap justify-evenly pt-14">
    {
      filterData.map((card) => {
        return (
          <Card name={card.name} price={card.price} rating={card.rating} image={card.image} />
        );
      })
    }
    </div>
    </>
  )
}

export default App;
