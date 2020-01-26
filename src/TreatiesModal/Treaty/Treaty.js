import React, { useState, useContext } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";

const Treaty = ({ treaty }) => {
  const { name } = treaty;
  const { state, selectTreaty } = useContext(TreatiesContext);

  const isChecked = (selectedTreaties, treaty) => {
    return selectedTreaties.some(selectedTreaty => {
      return selectedTreaty.id === treaty.id;
    });
  };

  return (
    <>
      <li className='treaty'>
        <input
          className='treaty__checkbox'
          type='checkbox'
          onChange={() => {
            selectTreaty(treaty);
          }}
          checked={isChecked(state.selectedTreaties, treaty)}
        />
        <label className='treaty__label'>{name}</label>
      </li>
    </>
  );
};

export default Treaty;
