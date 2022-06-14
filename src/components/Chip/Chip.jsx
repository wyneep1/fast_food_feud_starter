import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, clickEvent, closeClickEvent}) {
  
 var buttonClassName;
  if(isActive){
    buttonClassName ="chip active";
  }else{
    buttonClassName ="chip";
  }
  return (
    <button className={buttonClassName} onClick={clickEvent}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={closeClickEvent}>{`X`}</span>
    </button>
  )
}

export default Chip
