import React, { useState, useEffect } from "react";

const App = () => {
  const [tours, setTours] = useState([]); // State for storing tours
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error message

  // Function to fetch tours
  const fetchTours = async () => {
    setLoading(true);
    setError(null); // Clear any previous error
    try {
      const response = await fetch("https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setTours(data); // Update tours state with fetched data
    } catch (err) {
      setError(err.message); // Update error state
    } finally {
      setLoading(false); // End loading
    }
  };

  // useEffect to fetch tours on component mount
  useEffect(() => {
    fetchTours();
  }, []);

  // Conditional Rendering
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={fetchTours}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <h2>{tour.name}</h2>
            <p>{tour.info}</p>
            <p>Price: ${tour.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;