import React, { useState, useEffect } from "react";
import Searchbar from "../Search/Searchbar";
import '../Home/Home.element.css'
// import axios from "axios";

const baseURL = "https://api.hatchways.io/assessment/students";
const HomeScreen = () => {
  const [students, setStudents] = useState([]);
  const [searchItems, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


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
      searchItems.map((result, index) => dataSearch(result, index))
    ) : isSearching ? (
      <p>No Item</p>
    ) : (
      students?.map((result, index) => dataSearch(result, index))
    );
  };
 
  return (
    < >
      <div className="searchbar">
        <Searchbar students={students} latestResults={latestResults} />
      </div>
      <div class="line-2"></div>
      <div className="Container">{renderInfo()}</div>
    </>
  );
};

export default HomeScreen;

function dataSearch(result, index) {
  return (
    <div 
       key={result.id}>
      <img src={result.pic} alt="frame" />
      <h1>{`${result.firstName} ${result.lastName}`}</h1>
      <p>Email:{result.email}</p>
      <p>Company:{result.company}</p>
      <p>Skills:{result.skill}</p>
      <p>Average:{result.grades[index]}</p>
    </div>
  );
}
