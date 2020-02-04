import React, { useState, useContext } from "react";
import TreatyTable from "./TreatyTable/TreatyTable";
import { Context as TreatiesContext } from "../context/TreatiesContext";

const TreatiesModal = () => {
  const [action, setAction] = useState("remove");
  const { state, clearSelectedTreaties } = useContext(TreatiesContext);

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

  return (
    <div className='panel'>
      <header className='panel__header'>
        <div class='title-container'>
          <h1 className='title'>Add or Remove Treaties</h1>
          <svg
            className='close'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
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
            Applied Treaties <span className='treaties-tab__count'>1,203</span>
          </button>
          <button
            onClick={() => {
              clearSelectedTreaties();
              setAction("add");
            }}
            className={`treaties-tab ${action === "add" &&
              "treaties-tab--active"}`}
          >
            Available Treaties <span className='treaties-tab__count'>1.2m</span>
          </button>
        </div>
      </header>
      <section className={`panel__body panel__body--${action}`}>
        {renderTreatyTables(action)}
      </section>
      <div className='panel__footer'>
        <button className='finish'>Finish</button>
      </div>
    </div>
  );
};

export default TreatiesModal;
