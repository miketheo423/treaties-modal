import React, { useContext } from "react";
import { Context as TreatiesContext } from "../../context/TreatiesContext";

const Treaty = ({ treaty, action }) => {
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
      <tr className='treaty'>
        <td>
          <label className='treaty__label'>
            <input
              className='treaty__checkbox'
              type='checkbox'
              onChange={() => {
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
        <td>{perRiskLimit}</td>
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
