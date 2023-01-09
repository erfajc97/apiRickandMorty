import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Pagination = ({ residents }) => {
  const [page, setPage] = useState(1);
  const lastIndex = page * 20;
  const firstIndex = lastIndex - 20;
  const paginacion = residents?.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(residents?.length / 20);
//  console.log(lastPage);

  const numbers = [];
  for (let i = page - 3; i <= page + 2; i++) {
    if (i >= page && i <= lastPage) {
      numbers.push(i);
    }
  }

  return (
    <>
      <div className="container__characters">
        {paginacion?.map((url) => (
          <ResidentInfo url={url} key={url} />
        ))}
      </div>

      <footer>
        <div className="containerbuttonFooter">
          <a href="#">
            <button
              className="pagination nNb"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}>
              Back
            </button>
          </a>



          {numbers.map((number) => (
            <a href="#"
              key={number}
            >

              <button
                className="pagination numbers"
                onClick={() => setPage(number)}>
                {number}
              </button>


            </a>




          ))}
          <a href="#">
            <button
              className="pagination nNb"
              onClick={() => setPage(page + 1)}
              disabled={page === lastPage}>
              Next
            </button>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Pagination;
