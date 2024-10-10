import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
      title: "",
      desc: "",
      price: null,
      cover: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
      setBook((prev) => ({...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
      e.preventDefault();
      if (!book.title || !book.desc || !book.price || !book.cover) {
          alert("All fields are required!"); // Basic validation
          return;
      }
      
      setLoading(true); // Start loading
      setError(null); // Reset error state
      
      try {
          await axios.post("http://localhost:8800/books", book);
          navigate("/");
      } catch (err) {
          console.log(err);
          setError("Failed to add book. Please try again."); // Set error message
      } finally {
          setLoading(false); // End loading
      }
  };

  return (
      <div className='form'>
          <h1>Add New Book</h1>
          <input type="text" placeholder='Title' onChange={handleChange} name="title" />
          <input type="text" placeholder='Desc' onChange={handleChange} name="desc" />
          <input type="number" placeholder='Price' onChange={handleChange} name="price" />
          <input type="text" placeholder='Cover' onChange={handleChange} name="cover" />
          {loading ? <p>Loading...</p> : <button onClick={handleClick}>Add</button>}
          {error && <p style={{color: 'red'}}>{error}</p>} {/* Display error message */}
      </div>
  );
};

export default Add

/**
 * 1. bikin di retunnya dulu, input itu
 * 2. bikin const book sama setBook
 * 3. tambahin name di masing-masing tag input
 * 4. tambahin onChange
 * 5. bikin const handleChange
 * 6. setelah const handleChange selsai, tambahkan console log untuk testing
 * 7. bikin button Add
 * 8. bikin const handleClick
 */
