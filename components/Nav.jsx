'use client'
import React from 'react'
import image from 'react';


import { useState } from "react";

export default function Nav() {
  
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      // Perform the search using an API or any other method specific to your program.
      // For this example, we'll use a dummy search function that returns mock results.
      const results = await searchPlaces(searchQuery);
  
      // Update the search results state
      setSearchResults(results);
    };
  
    const searchPlaces = async (query) => {
      // Implement your search logic here, such as calling an API or querying a database.
      // For simplicity, we'll return a mock array of place names that match the query.
      const places = ["Restaurant", "Cafe", "Park", "Museum", "Library"];
  
      return places.filter((place) =>
        place.toLowerCase().includes(query.toLowerCase())
      );
    };
  
    return (
      <div className="navbarr1">
        <div>
          {searchResults.length > 0 ? (
            searchResults.map((result) => <p key={result}>{result}</p>)
          ) : (
            <p>No results found.</p>
          )}
        </div>
        <div >
          <input id='input'
            type="text"
            placeholder="Add guests"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
        <div className="msearch2">
          <button onClick={handleSearch} className="msearch">
          {/* <img src='./img/lup.svg' id='lup' width={30} height={20}/> */}
          <p class="material-symbols-outlined">search</p>
          </button>
        </div>
  
        
        {/* <div>
          {searchResults.length > 0 ? (
            searchResults.map((result) => <p key={result}>{result}</p>)
          ) : (
            <p>No results found.</p>
          )}
        </div> */}
      </div>
  )
}
