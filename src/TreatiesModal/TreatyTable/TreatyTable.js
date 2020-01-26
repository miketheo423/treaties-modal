import React, { useState, useEffect, useContext } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";
import Treaty from "../Treaty/Treaty";

const TreatyTable = ({ tab, action, treaties }) => {
  const [count, setCount] = useState(0);
  const { state } = useContext(TreatiesContext);

  const renderNextCount = count => {
    return <span className='counter__next-count'>{count}</span>;
  };

  const renderAction = action => {
    if (action === "add") {
      return (
        <>
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
          >
            <path d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z' />
          </svg>
          Add
        </>
      );
    } else {
      return (
        <>
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
          >
            <path d='M0 10h24v4h-24z' />
          </svg>
          Remove
        </>
      );
    }
  };

  useEffect(() => {
    if (tab === action) {
      setCount(state.selectedTreaties.length);
    }
  }, [state.selectedTreaties]);

  const renderTreaties = treaties => {
    return treaties.map((treaty, index) => {
      return <Treaty key={index} treaty={treaty} />;
    });
  };

  return (
    <div className={`treaty-table treaty-table--${action}`}>
      <button
        onClick={() => setCount(count + 1)}
        className={`treaties-button ${
          state.selectedTreaties.length > 0
            ? `treaties-button--${action}`
            : "treaties-button--empty"
        }`}
      >
        <span className='action'>{renderAction(action)}</span>
        Selected Treaties
        <span className='counter'>
          {renderNextCount(count)}
          <span className='counter__base-count counter__count'>{count}</span>
        </span>
      </button>
      <ul className='treaties'>{renderTreaties(treaties)}</ul>
    </div>
  );
};

export default TreatyTable;
