import { useEffect, useState } from 'react';
import Header from "./components/Header/Header";
import Food from "./components/Food Page/Food";
import './App.css';

const App = () => {
  const BASE_URL = "http://localhost:9000";

  // --- STATE MANAGEMENT ---
  const [data, setData] = useState(null);            // Raw Data
  const [filteredData, setFilteredData] = useState(null); // Data shown to user
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- FETCH LOGIC ---
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Server Error");

        const json = await response.json();
        setData(json);
        setFilteredData(json); // Initially, show all data
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  // --- SEARCH LOGIC ---
  const searchFilter = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(data); // Reset to full list
    } else {
      const filter = data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filter);
    }
  };

  // --- CATEGORY FILTER LOGIC ---
  const categoryFilter = (type) => {
    if (type === "all") {
      setFilteredData(data);
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
  };

  // --- RENDER ---
  // Notice: We pass the DATA down to Food, and Functions down to Header
  return (
    <>
      <Header 
         searchFilter={searchFilter} 
         categoryFilter={categoryFilter} // Pass this too so buttons work!
      />
      
      <Food 
         data={filteredData} // Pass the FILTERED data, not raw data
         loading={loading} 
         error={error} 
         BASE_URL={BASE_URL} // Pass URL so Food can load images
      />
    </>
  );
};

export default App;