import * as React from "react"
import Chip from "../Chip/Chip"
export function RestaurantsRow(props){

return(
<div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
          {props.restaurants.map((res, i)=>(
              <Chip key={i} label={res} clickEvent={()=> props.setRestaurant(res)} 
              isActive={(res===props.restaurant)} 
              closeClickEvent={(e)=> {e.stopPropagation(); props.setRestaurant("")}}/>
            ))}
          </div>
        </div>
     )}

     export default RestaurantsRow