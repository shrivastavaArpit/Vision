// SearchBar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px 0 0 4px;
  flex: 1;
  max-width: 500px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f0c14b;
  border: 1px solid #a88734;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e5b238;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = googleSearchUrl;
  };

  return (
    <SearchBarContainer>
      <form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Search for products, brands, and more"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
