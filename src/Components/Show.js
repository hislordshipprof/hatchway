import React from 'react'

 const Show = ({result,index,selected,toggle}) => {
  
      return (
        <div className="container-main">
          <div className="Container" key={result.id}>
            <div className="detail-img">
              <img className="image" src={result.pic} alt="frame" />
            </div>

            <div className="name-details">
              <div className="title-name" onClick={() => toggle(index)}>
                <span>{index === selected ? "-" : "+"}</span>

                <h1>{`${result.firstName} ${result.lastName}`}</h1>
              </div>
              <p>Email:{result.email}</p>
              <p>Company:{result.company}</p>
              <p>Skills:{result.skill}</p>
              <p>Average:{result.grades[index]}</p>

              <div className={selected === index ? "content-show" : " content"}>
                {result?.grades?.map((item, index) => (
                  <div className="score-list">
                    <p className="test">Test{index + 1}:</p>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Show;