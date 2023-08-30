import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Simulated API call to fetch volunteer data
    fetch('http://localhost:4000/api/bog/users') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setVolunteers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <p>{volunteers}</p>
    </div>
  );
}

export default App;
