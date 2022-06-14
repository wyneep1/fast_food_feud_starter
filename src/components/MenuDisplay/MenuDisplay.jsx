import NutritionalLabel from "../NutritionalLabel/NutritionalLabel";
import Chip from "../Chip/Chip";
export function MenuDisplay(props) {

return(
<div className="MenuDisplay display">
        <div className="MenuItemButtons menu-items">
          <h2 className="title">Menu Items</h2>
          {props.currentMenuItems.map((menu, info)=>(
          <Chip key={info} label={menu.item_name} clickEvent={()=> props.setItem(menu)} 
          isActive={(props.menuItem === menu)}
          closeClickEvent={(e)=> {e.stopPropagation(); props.setItem("")}}/>
          ))}
          </div>

        {/* NUTRITION FACTS */}
        <div className="NutritionFacts nutrition-facts">
          <NutritionalLabel item={props.menuItem}></NutritionalLabel>
        </div>
      </div>
    )}
    export default MenuDisplay