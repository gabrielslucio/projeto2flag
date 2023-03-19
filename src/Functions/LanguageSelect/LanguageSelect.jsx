import React, { useState, useRef } from "react";
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
        <span>{languageState.toUpperCase()}</span>
        {showOptions ? <MdKeyboardArrowUp className="arrow-up" /> : <MdKeyboardArrowDown className="arrow-down" />}
      </div>

      {showOptions && (
        <table className="language-options">
          <tbody className="tbody">
            <tr className="tr">
              <td className="td">
                <button onClick={() => handleLanguageChange("pt")}>
                  PT
                </button>
              </td>
              <td className="td">
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
