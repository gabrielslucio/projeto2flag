import React, { useState, useRef } from "react";
import { TbWorld } from "react-icons/tb";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

import './LanguageSelect.css';

function LanguageSelect(props) {
  const [showOptions, setShowOptions] = useState(false);
  const [languageState, setLanguageState] = useState(props.language);
  const ref = useRef(null);

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  const handleLanguageChange = (language) => {
    setLanguageState(language);
    props.onLanguageChange(language);
    setShowOptions(false);
  };

  return (
    <div className="language-select" ref={ref}>
      <div className="icon-box" onClick={handleIconClick}>
        <TbWorld />
        <span>{languageState.toUpperCase()}</span>
        {showOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>

      {showOptions && (
        <table className="language-options">
          <tbody>
            <tr>
              <td>
                <button onClick={() => handleLanguageChange("pt")}>
                  PT
                </button>
              </td>
              <td>
                <button onClick={() => handleLanguageChange("en")}>
                  EN
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LanguageSelect;
