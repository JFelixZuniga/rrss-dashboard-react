import React, { useRef } from "react";
import "./switch.css";

function Switch({ setDarkMode, checked, setChecked }) {
  // ref hará referencia a un valor mutable, el que puede cambiar y reasignar en cualquier momento, sin entrometerse con el estado del componente.
  const ref = useRef(null);
  function handleChange() {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        ref={ref}
        onChange={handleChange}
        checked={checked}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
}

export default Switch;
