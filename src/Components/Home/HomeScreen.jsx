import React, { useState, useEffect } from "react";
import Searchbar from "../Search/Searchbar";
import Show from "../Show";




const baseURL = "https://api.hatchways.io/assessment/students";
const HomeScreen = () => {
  const [students, setStudents] = useState([]);
  const [searchItems, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
   const [selected, setSelected] = useState(null);

 const toggle=(i)=>{
   if (selected ===i){
     return setSelected(null)
   }
   setSelected(i)
  }

  const latestResults = (results, value) => {
    console.log(results);
    if (value) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
    if (results?.length) return setSearchResult(results);
    setSearchResult([]);
  };

  const fetchDataApi = async () => {
    try {
      const response = await fetch(baseURL);
      const json = await response.json();
      console.log(json.students);
      setStudents(json.students);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchDataApi();
  }, []);





  const renderInfo = () => {
    return searchItems?.length ? (
      searchItems.map((result, index) => (
        <Show
          result={result}
          index={index}
          toggle={toggle}
          selected={selected}
        />
      ))
    ) : isSearching ? (
      <p>No Item</p>
    ) : (
      students?.map((result, index) => (
        <Show
          result={result}
          index={index}
          toggle={toggle}
          selected={selected}
        />
      ))
    );
    
  };
  
   
  return (
    <div id="main-app">
      <Searchbar students={students} latestResults={latestResults} />
      
      <hr className="line-2"></hr>
      {renderInfo()
      }
      
    </div>
  );
};

export default HomeScreen;

