import React, { useState, useContext } from "react";
import TreatyTable from "./TreatyTable/TreatyTable";
import { Context as TreatiesContext } from "../context/TreatiesContext";

const TreatiesModal = () => {
  const [action, setAction] = useState("add");
  const { state, addTreaty } = useContext(TreatiesContext);

  const filterTreaties = (treaties, type) => {
    return treaties.filter(treaty => treaty.type === type);
  };

  const renderTreatyTable = action => {
    if (action === "add") {
      return (
        <TreatyTable
          action='add'
          treaties={filterTreaties(state, "applied")}
          className={`${action === "add"} && 'active'`}
        />
      );
    } else {
      return (
        <TreatyTable
          action='remove'
          treaties={filterTreaties(state, "available")}
          className={`${action === "remove"} && 'active'`}
        />
      );
    }
  };

  return (
    <div className='panel'>
      <header className='panel__header'>
        <h1 className='title'>Add or Remove Treaties</h1>
        <div className='treaty-tabs'>
          <button
            onClick={() => setAction("add")}
            className={`treaties-tab ${action === "add" &&
              "treaties-tab--active"}`}
          >
            Applied Treaties <span className='treaties-tab__count'>1,203</span>
          </button>
          <button
            onClick={() => setAction("remove")}
            className={`treaties-tab ${action === "remove" &&
              "treaties-tab--active"}`}
          >
            Available Treaties <span className='treaties-tab__count'>1.2m</span>
          </button>
        </div>
      </header>
      <section className='panel__body'>{renderTreatyTable(action)}</section>
    </div>
  );
};

export default TreatiesModal;
