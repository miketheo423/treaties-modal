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
        <h1 className='title'>Add or Remove Treaties</h1>
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
    </div>
  );
};

export default TreatiesModal;
