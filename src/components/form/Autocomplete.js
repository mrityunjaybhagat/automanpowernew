import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { postData } from '../../services/apiServices'; // Adjust path if needed
import './Autocomplete.css'; // Include your custom CSS here

const Autocomplete = ({ endpoint, onSelect, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.trim() === '') {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await postData(endpoint, { query: inputValue });
        console.log('API Response:', response); // Log the response for debugging
        if (response.code === 200) {
          setSuggestions(response.data.map(item => ({
            label: item,
            value: item,
          })));
        } else {
          setSuggestions([{ label: 'Error loading data', value: 'error' }]);
        }
      } catch (err) {
        console.error('Error fetching data:', err); // Log the error for debugging
        setSuggestions([{ label: 'Error loading data', value: 'error' }]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [inputValue, endpoint]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.label);
    setSuggestions([]); // Close the suggestions list after selecting an option
    onSelect(suggestion);
  };

  const handleBlur = () => {
    // To close suggestions when the input loses focus
    setTimeout(() => setSuggestions([]), 100);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="autocomplete-input"
      />
      {loading && <p>Loading...</p>}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map(suggestion => (
            <li
              key={suggestion.value}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`suggestion-item ${suggestion.value === 'error' ? 'error' : ''}`}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  endpoint: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Autocomplete.defaultProps = {
  placeholder: 'Type to search...',
};

export default Autocomplete;
