import React, { useState } from "react";
import "./../App.css";

const ListItem = (props) => {
  const [active, setActive] = useState(true);
  const Buy = (e) => {
    setActive(!active);
    e.target.querySelector("input").checked = active;
  };

  return (
    <li className="list__item" onClick={Buy}>
      <input type="checkbox" id={`i${props.number}`} />
      <label htmlFor={`i${props.number}`}>
        {props.itemToBuy}
        <span>{props.remark}</span>
      </label>
    </li>
  );
};

export default ListItem;
