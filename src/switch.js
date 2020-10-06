import React, { useRef, useEffect, useState } from "react";
import "./switch.css";

function Switch() {
  const [checked, setChecked] = useState(false);
  // ref hará referencia a un valor mutable, el que puede cambiar y reasignar en cualquier momento, sin entrometerse con el estado del componente.
  const ref = useRef(null);
  function handleChange() {
    setChecked(ref.current.checked);
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setChecked(true);
    }
  }, []);
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
