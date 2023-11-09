import React, { useState } from 'react';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  console.log('페이지수는');
  console.log(numPages);
  const [currPage, setCurrPage] = useState(page);

  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = Math.min(currPage - (currPage % 5) + 5, numPages);

  return (
    <div className='Pagination'>
      <nav>
        <button
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          &lt;
        </button>
        <button
          onClick={() => setPage(firstNum)}
          className={page === firstNum ? 'page' : null}
        >
          {firstNum}
        </button>
        {Array(4)
          .fill()
          .map((_, i) => {
            if (i <= 2) {
              return (
                <button
                  border='true'
                  key={i + 1}
                  onClick={() => {
                    setPage(firstNum + 1 + i);
                  }}
                  className={page === firstNum + 1 + i ? 'page' : null}
                >
                  {firstNum + 1 + i}
                </button>
              );
            } else if (i >= 3) {
              return (
                <button
                  border='true'
                  key={i + 1}
                  onClick={() => setPage(lastNum)}
                  className={page === lastNum ? 'page' : null}
                >
                  {lastNum}
                </button>
              );
            }
          })}
        {/* {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(firstNum + 1 + i)}
            className={page === firstNum ? 'page' : undefined}
          >
            {firstNum + i + 1}
          </button>
        ))} */}
        <button
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page);
          }}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
