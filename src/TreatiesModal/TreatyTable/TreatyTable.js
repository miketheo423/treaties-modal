import React, { useState, useEffect, useContext, useRef } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";
import Treaty from "../Treaty/Treaty";

function TreatyTable({ tab, action, treaties }) {
  const renderTreaties = treaties => {
    if (treaties.length === 0) {
      return (
        <h2 className='empty-message'>
          No {action === "add" ? "Available" : "Applied"} Treaties
        </h2>
      );
    } else {
      return treaties.map((treaty, index) => {
        return <Treaty key={index} treaty={treaty} action={action} />;
      });
    }
  };

  return (
    <div className={`treaties-section treaties-section--${action}`}>
      <table className='table'>
        <thead>
          <tr className='table__header'>
            <th className='title'>Name</th>
            <th className='title'>Number</th>
            <th className='title'>Type</th>
            <th className='title'>Currency</th>
            <th className='title'>Per Risk Limit</th>
            <th className='title'>Occurance Limit</th>
            <th className='title'>Attachment Point</th>
            <th className='title'>Attachment basis</th>
            <th className='title'>Lines of Business</th>
            <th className='title'>Cedant</th>
          </tr>
        </thead>
        <tbody>{renderTreaties(treaties)}</tbody>
      </table>
    </div>
  );
}

export default TreatyTable;
