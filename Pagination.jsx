import React from "react";
import "./Post.css";

const Pagination = ({ PageNu, setPageNu }) => {
  const prevThreeNo = Array.from(
    { length: 3 },
    (_, index) => PageNu - 1 - index
  ).filter((value) => value > 0).reverse();
    // console.log(prevThreeNo);
    const nextFourNuArr=Array.from({length:4},(_,index)=>PageNu+index)
    const paginationArr=[...prevThreeNo,...nextFourNuArr];
    // console.log(paginationArr);



  const handleNext = () => {
    setPageNu(PageNu + 1);
  };
  const handlePrev = () => {
    if (PageNu > 1) {
      setPageNu(PageNu - 1);
    }
  };
  return (
    <div className="pagination-container">
      {PageNu > 1 ? (
        <div className="page-btn" onClick={handlePrev}>
          {"<"}
        </div>
      ) : (
        ""
      )}

      {paginationArr.map((value)=>{

      return <div onClick={()=>setPageNu(value)} className={value==PageNu?`page-btn active`:`page-btn`}>{value}</div>
      })}


      <div className="page-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
