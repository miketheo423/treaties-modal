import React, { useState, useContext, useEffect } from "react";
import TreatyTable from "./TreatyTable/TreatyTable";
import { Context as TreatiesContext } from "../context/TreatiesContext";
import { useRef } from "react";

const TreatiesModal = () => {
  const [action, setAction] = useState("remove");
  const { state, clearSelectedTreaties, updateSelectedTreaties } = useContext(
    TreatiesContext
  );
  const counterRef = useRef();
  const [currentCount, setCount] = useState(state.selectedTreaties.length);

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

  const renderAction = action =>
    action === "add" ? <AddIcon /> : <RemoveIcon />;

  const renderTreatyTables = action => {
    return (
      <>
        <TreatyTable
          tab={action}
          action='remove'
          treaties={state.appliedTreaties}
          className={`${action === "remove"} && 'active'`}
        />
        <TreatyTable
          tab={action}
          action='add'
          treaties={state.availableTreaties}
          className={`${action === "add"} && 'active'`}
        />
      </>
    );
  };

  useEffect(() => {
    handleCountChange(state.selectedTreaties.length);
  });

  return (
    <div className='panel-container'>
      <div className='panel'>
        <header className='panel__header'>
          <div className='title-container'>
            <h1 className='title'>Add or Remove Treaties</h1>
            <CloseIcon />
          </div>
          <div className='treaty-tabs'>
            <button
              onClick={() => {
                clearSelectedTreaties();
                setAction("remove");
              }}
              className={`treaties-tab ${action === "remove" &&
                "treaties-tab--active"}`}
            >
              Applied Treaties
              <span className='treaties-tab__count'>1,203</span>
            </button>
            <button
              onClick={() => {
                clearSelectedTreaties();
                setAction("add");
              }}
              className={`treaties-tab ${action === "add" &&
                "treaties-tab--active"}`}
            >
              Available Treaties
              <span className='treaties-tab__count'>1.2m</span>
            </button>
          </div>
        </header>
        <section className={`panel__body panel__body--${action}`}>
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
              <span
                ref={counterRef}
                className='counter__base-count counter__count'
              >
                {currentCount}
              </span>
            </span>
          </button>
          <div className='tables'>{renderTreatyTables(action)}</div>
        </section>
        <div className='panel__footer'>
          <button className='finish'>Finish</button>
        </div>
      </div>
    </div>
  );
};

const CloseIcon = () => (
  <svg
    className='close'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='30 15 40 75'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill='#222222'>
        <polygon points='74 31.5 68.5 26 50 44.5 31.5 26 26 31.5 44.5 50 26 68.5 31.5 74 50 55.5 68.5 74 74 68.5 55.5 50'></polygon>
      </g>
      <g fill='#222222'>
        <polygon points='74 31.5 68.5 26 50 44.5 31.5 26 26 31.5 44.5 50 26 68.5 31.5 74 50 55.5 68.5 74 74 68.5 55.5 50'></polygon>
      </g>
    </g>
  </svg>
);

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

export default TreatiesModal;
