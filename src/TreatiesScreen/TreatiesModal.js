import React, { useState } from "react";
import Treaty from "./Treaty/Treaty";

const TreatiesModal = () => {
  const [action, setAction] = useState("add");
  const [active, setActive] = useState(false);
  const treaties = [
    { name: "Treaty 1" },
    { name: "Treaty 2" },
    { name: "Treaty 3" },
    { name: "Treaty 4" }
  ];

  const renderAction = action => {
    if (action === "add") {
      return (
        <>
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
          >
            <path
              d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z'
              className='icon'
            />
          </svg>
          Add
        </>
      );
    } else {
      return (
        <>
          <svg
            className='icon'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
          >
            <path d='M0 10h24v4h-24z' />
          </svg>
          Remove
        </>
      );
    }
  };

  const generateTreaties = treaties => {
    return treaties.map((treaty, index) => {
      return <Treaty key={index} treaty={treaty} />;
    });
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
      <button
        onClick={() => setActive(!active)}
        className={`treaties-button ${
          active ? `treaties-button--${action}` : "treaties-button--empty"
        }`}
      >
        <span className='action'>{renderAction(action)}</span>
        Selected Treaties
        <span className='counter'>
          <span className='counter__base-count counter__count'>0</span>
        </span>
      </button>
      <ul className='treaties'>{generateTreaties(treaties)}</ul>
    </div>
  );
};

export default TreatiesModal;
