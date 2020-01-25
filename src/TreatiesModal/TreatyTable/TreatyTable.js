import React, { useState } from "react";
import Treaty from "../Treaty/Treaty";

const TreatyTable = ({ action, treaties }) => {
  const [active, setActive] = useState(false);

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
            <path
              d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z'
              className='icon'
            />
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

  const renderTreaties = treaties => {
    return treaties.map((treaty, index) => {
      return <Treaty key={index} treaty={treaty} />;
    });
  };
  return (
    <div>
      <button
        onClick={() => setActive(!active)}
        className={`treaties-button ${
          active ? `treaties-button--${action}` : "treaties-button--empty"
        }`}
      >
        <span className='action'>{renderAction(action)}</span>
        Selected Treaties
        <span className='counter'>
          <span className='counter__base-count counter__count'>0</span>
        </span>
      </button>
      <ul className='treaties'>{renderTreaties(treaties)}</ul>
    </div>
  );
};

export default TreatyTable;
