import styles from "../styles/SearchBar.module.css";
import { useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearchResults }) => {
  const [suburb, setSuburb] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/houses/search?suburb=${suburb}`);
      setSearchResults(response.data);
      // Pass the search results to the parent component
      onSearchResults(response.data);
    } catch (error) {
      console.error("Error searching by suburb:", error);
    }
  };

  return (
    <>
    
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search by Area..."
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />
          <button type="submit" className={styles.searchIcon}>
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </form>

    </>
  );
};

export default SearchBar;