import React, { useState, useContext } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";
import Treaty from "../Treaty/Treaty";

const TreatyTable = ({ tab, action, treaties }) => {
  const [active, setActive] = useState(false);
  const { state } = useContext(TreatiesContext);

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

  const renderButton = action => {
    if (action === "add") {
      return (
        <button
          className={`treaties-button ${
            state.selectedTreaties.length > 0
              ? `treaties-button--add`
              : "treaties-button--empty"
          }`}
        >
          {renderAction(action)}
          Selected Treaties
          <span className='counter'>
            <span className='counter__base-count counter__count'>
              {state.selectedTreaties.length}
            </span>
          </span>
        </button>
      );
    } else {
      return (
        <button
          className={`treaties-button ${
            state.selectedTreaties.length > 0 && tab === "remove"
              ? `treaties-button--remove`
              : "treaties-button--empty"
          }`}
        >
          <span className='action'>
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
          </span>
          Selected Treaties
          <span className='counter'>
            <span className='counter__base-count counter__count'>
              {state.selectedTreaties.length}
            </span>
          </span>
        </button>
      );
    }
  };

  const renderTreaties = treaties => {
    return treaties.map((treaty, index) => {
      return <Treaty key={index} treaty={treaty} />;
    });
  };

  return (
    <div className={`treaty-table treaty-table--${action}`}>
      <button
        className={`treaties-button ${
          state.selectedTreaties.length > 0
            ? `treaties-button--${action}`
            : "treaties-button--empty"
        }`}
      >
        <span className='action'>{renderAction(action)}</span>
        Selected Treaties
        <span className='counter'>
          <span className='counter__base-count counter__count'>
            {state.selectedTreaties.length}
          </span>
        </span>
      </button>
      <ul className='treaties'>{renderTreaties(treaties)}</ul>
    </div>
  );
};

export default TreatyTable;
