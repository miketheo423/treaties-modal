import React from "react";

const Treaty = ({ treaty }) => {
  const { name } = treaty;
  return (
    <>
      <li className='treaty'>
        <input className='treaty__checkbox' type='checkbox' />
        <label className='treaty__label'>{name}</label>
      </li>
    </>
  );
};

export default Treaty;
