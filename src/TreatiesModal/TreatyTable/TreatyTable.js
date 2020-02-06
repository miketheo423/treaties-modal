import React from "react";
import Treaty from "../Treaty/Treaty";

function TreatyTable({ tab, action, treaties }) {
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
              <th align='left'>Name</th>
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
          <tbody>{renderTreaties(treaties)}</tbody>
        </table>
      );
    }
  };
  const renderTreaties = treaties => {
    return treaties.map((treaty, index) => {
      return <Treaty key={index} treaty={treaty} action={action} />;
    });
  };

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
