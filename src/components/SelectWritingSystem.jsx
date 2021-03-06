import React, { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

function SelectWritingSystem() {
  const [{ writingsystem }, dispatch] = useContext(ScoreContext);
  return (
    <button
      type="button"
      className="SelectWritingSystemBtn"
      onClick={() => {
        if (writingsystem === "hiragana") {
          dispatch({ type: "SET_WRITING_SYSTEM", writingsystem: "katakana" });
        } else {
          dispatch({ type: "SET_WRITING_SYSTEM", writingsystem: "hiragana" });
        }
      }}
    >
      <h2>{writingsystem}</h2>
    </button>
  );
}

export default SelectWritingSystem;
