import React from 'react'
import '../Search/Search.element.css'
const Searchbar = (props) => {
    
   const searchhandler =(e)=>{
        e.preventDefault()
        onSearch(e.target.value)
    }
    const onSearch = (value) => {
      const filtered = props.students?.filter((item) => {
        const arr = item?.firstName?.toLowerCase().split(value);
        if (arr.length > 1) return item;
        return null;
      });
     props.latestResults(filtered,value);
    };


    return (
      <div className="main-input">
        <input
          placeholder="search students"
          onChange={(e) => {
            searchhandler(e);
          }}
        />
       
      </div>
    );
}

export default Searchbar
