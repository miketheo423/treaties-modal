import React, { useState, useEffect, useContext, useRef } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";
import Treaty from "../Treaty/Treaty";

function TreatyTable({ tab, action, treaties }) {
  const { state, updateSelectedTreaties } = useContext(TreatiesContext);
  const counterRef = useRef();
  const [currentCount, setCount] = useState(state.selectedTreaties.length);

  const renderAction = action =>
    action === "add" ? <AddIcon /> : <RemoveIcon />;

  const handleCountChange = count => {
    if (state.selectedTreaties.length === currentCount) return;
    counterRef.current.style.transform =
      count > currentCount ? "translateY(18px)" : "translateY(-18px)";
    setTimeout(() => {
      counterRef.current.style.transitionDuration = "0s";
      counterRef.current.style.transform =
        count > currentCount ? "translateY(-18px)" : "translateY(18px)";
      // counterRef.current.style.opacity = 0;
      setCount(count);

      setTimeout(() => {
        counterRef.current.style.transitionDuration = "0.3s";
        counterRef.current.style.transform = "translateY(0)";
        // counterRef.current.style.opacity = 1;
      }, 20);
    }, 100);
  };

  useEffect(() => {
    if (tab === action) {
      handleCountChange(state.selectedTreaties.length);
    }
  });

  const renderTreaties = treaties => {
    if (treaties.length === 0) {
      return (
        <h2 className='empty-message'>
          No {action === "add" ? "Available" : "Applied"} Treaties
        </h2>
      );
    } else {
      return treaties.map((treaty, index) => {
        return <Treaty key={index} treaty={treaty} />;
      });
    }
  };

  return (
    <div className={`treaty-table treaty-table--${action}`}>
      <button
        onClick={() => updateSelectedTreaties(state.selectedTreaties)}
        className={`treaties-button ${
          state.selectedTreaties.length > 0
            ? `treaties-button--${action}`
            : "treaties-button--empty"
        }`}
      >
        <span className='action'>{renderAction(action)}</span>
        Selected Treaties
        <span className='counter'>
          <span ref={counterRef} className='counter__base-count counter__count'>
            {currentCount}
          </span>
        </span>
      </button>
      <ul
        className={`treaties ${treaties.length === 0 ? "treaties--empty" : ""}`}
      >
        {renderTreaties(treaties)}
      </ul>
    </div>
  );
}

const AddIcon = () => (
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

const RemoveIcon = () => (
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

export default TreatyTable;
