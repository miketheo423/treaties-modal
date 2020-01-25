import React, { useState } from "react";
import TreatyTable from "./TreatyTable/TreatyTable";

const TreatiesModal = () => {
  const [action, setAction] = useState("add");
  const appliedTreaties = [
    { name: "Treaty 1" },
    { name: "Treaty 2" },
    { name: "Treaty 3" },
    { name: "Treaty 4" }
  ];
  const availableTreaties = [
    { name: "Treaty 5" },
    { name: "Treaty 6" },
    { name: "Treaty 7" },
    { name: "Treaty 8" }
  ];

  const renderTreatyTable = action => {
    if (action === "add") {
      return (
        <TreatyTable
          action='add'
          treaties={appliedTreaties}
          className={`${action === "add"} && 'active'`}
        />
      );
    } else {
      return (
        <TreatyTable
          action='remove'
          treaties={availableTreaties}
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
