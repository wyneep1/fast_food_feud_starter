import * as React from "react"
import Chip from "../Chip/Chip";
export function CategoryColumn(props){

return(
    <div className="CategoriesColumn col">
    <div className="categories options">
      <h2 className="title">Categories</h2>
      {props.categories.map((cat, index)=>(
          <Chip key={index} label={cat} clickEvent={()=> props.setCategory(cat)} 
          isActive={(props.cat === cat)}
            closeClickEvent={(e)=> {e.stopPropagation(); props.setCategory("")}}/>
        ))}
    </div>
  </div>
    )}

    export default CategoryColumn