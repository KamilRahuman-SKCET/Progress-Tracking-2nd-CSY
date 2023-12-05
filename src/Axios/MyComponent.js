import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.example.com/data';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(API_URL, { newData: 'some data' });
      console.log('Created:', response.data);
      fetchData();
    } catch (err) {
      setError(err);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URL}/1`, { updatedData: 'updated data' });
      console.log('Updated:', response.data);
      fetchData();
    } catch (err) {
      setError(err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API_URL}/1`);
      console.log('Deleted:', response.data);
      fetchData();
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      {data ? (
        <div>
          <h1>Data from API:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {error && <p>Error: {error.message}</p>}

      <button onClick={handleCreate}>Create Data</button>
      <button onClick={handleUpdate}>Update Data</button>
      <button onClick={handleDelete}>Delete Data</button>
    </div>
  );
};

export default MyComponent;
