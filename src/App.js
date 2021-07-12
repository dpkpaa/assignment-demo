import { useState, useEffect } from "react";
import "./App.css";
import Passengers from "./Passengers";
import axios from "axios";
//end point of for Passengers: https://api.instantwebtools.net/v1/passenger?page=0&size=10
function App() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [passengers, setPassengers] = useState([]);

  const fetchPassengers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      setLoading(false);
      setTotalPage(data.totalPages);
      setPassengers([...passengers, ...data.data]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      if (page < totalPage) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    fetchPassengers();
  }, [page]);

  //on scroll load next page
  useEffect(() => {
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  });

  return (
    <div className="App">
      {loading && <h1 className="loader">Loading...</h1>}
      <Passengers data={passengers} />
    </div>
  );
}

export default App;
