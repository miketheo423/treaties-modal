import React, { useContext } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";

const Treaty = ({ treaty, action, onSelect }) => {
  const {
    name,
    number,
    treatyType,
    currency,
    perRiskLimit,
    occuranceLimit,
    attachmentPoint,
    attachmentBasis,
    lineOfBusiniess,
    cedant
  } = treaty;
  const { state, selectTreaty } = useContext(TreatiesContext);

  const isChecked = (selectedTreaties, treaty) => {
    return selectedTreaties.some(selectedTreaty => {
      return selectedTreaty.id === treaty.id;
    });
  };

  return (
    <>
      <tr
        onClick={() => {
          onSelect(treaty);
          selectTreaty(treaty);
        }}
        className='treaty'
      >
        <td>
          <label className='checkbox__label'>
            <input
              className='checkbox'
              type='checkbox'
              onChange={() => {
                onSelect(treaty);
                selectTreaty(treaty);
              }}
              checked={isChecked(state.selectedTreaties, treaty)}
            />
            {name}
            <span className={`checkmark checkmark--${action}`}></span>
          </label>
        </td>
        <td>{number}</td>
        <td>{treatyType}</td>
        <td>{currency}</td>
        <td align='right'>{perRiskLimit}</td>
        <td align='right'>{occuranceLimit}</td>
        <td align='right'>{attachmentPoint}</td>
        <td>{attachmentBasis}</td>
        <td>{lineOfBusiniess}</td>
        <td>{cedant}</td>
      </tr>
    </>
  );
};

export default Treaty;
