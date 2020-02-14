import React, { useContext, useState } from "react";
import Treaty from "../Treaty/Treaty";
import { Context as TreatiesContext } from "../../context/TreatiesContext";
import { useEffect } from "react";

function TreatyTable({ tab, action, treaties }) {
  const {
    state,
    selectTreaty,
    selectAllTreaties,
    clearSelectedTreaties
  } = useContext(TreatiesContext);

  const [height, setHeight] = useState("auto");

  const handleSelectAll = (treaties, allSelected) => {
    if (allSelected) {
      clearSelectedTreaties();
    } else {
      selectAllTreaties(treaties);
    }
  };

  const renderTable = treaties => {
    if (treaties.length === 0) {
      return (
        <h2 className='empty-message'>
          No {action === "add" ? "Available" : "Applied"} Treaties
        </h2>
      );
    } else {
      return (
        <table className='table'>
          <thead>
            <tr className='table__header'>
              <th align='left'>
                <label className='checkbox__label'>
                  <input
                    className='checkbox'
                    type='checkbox'
                    onChange={() => {
                      console.log("state.allSelected", state.allSelected);
                      handleSelectAll(treaties, state.allSelected);
                    }}
                    checked={state.allSelected}
                  />
                  <span
                    className={`checkmark checkmark--${action} checkmark--deselect`}
                  ></span>
                </label>
                Name
              </th>
              <th align='left'>Number</th>
              <th align='left'>Type</th>
              <th align='left'>Currency</th>
              <th align='right'>Per Risk Limit</th>
              <th align='right'>Occurance Limit</th>
              <th align='right'>Attachment Point</th>
              <th align='left'>Attachment basis</th>
              <th align='left'>Lines of Business</th>
              <th align='left'>Cedant</th>
            </tr>
          </thead>
          <tbody style={{ height }}>{renderTreaties(treaties)}</tbody>
        </table>
      );
    }
  };

  const renderTreaties = treaties => {
    return treaties.map((treaty, index) => {
      return (
        <Treaty
          key={index}
          treaty={treaty}
          action={action}
          onSelect={treaty => (treaty.selected = !treaty.selected)}
        />
      );
    });
  };

  const setTableHeight = () => {
    const panelBody = document.querySelector(".panel__body");
    console.log(panelBody.offsetHeight);
    setHeight(panelBody.offsetHeight - 102);
  };

  useEffect(() => {
    setTableHeight();
    window.addEventListener("resize", setTableHeight);
  }, []);

  return (
    <div
      className={`treaties-section treaties-section--${action} ${
        treaties.length === 0 ? "treaties-section--empty" : ""
      }`}
    >
      {renderTable(treaties)}
    </div>
  );
}

export default TreatyTable;
