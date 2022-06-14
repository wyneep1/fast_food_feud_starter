import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header.jsx"
import { createDataSet } from "./data/dataset"
import "./App.css"
import Instructions from "./components/Instructions/Instructions.jsx"
import { useState } from "react"
import CategoryColumn from "./components/CategoryColumn/CategoryColumn.jsx"
import RestaurantsRow from "./components/RestaurantsRow/RestaurantsRow.jsx"
import DataSource from "./components/DataSource/DataSource.jsx"
import MenuDisplay from "./components/MenuDisplay/MenuDisplay.jsx"
// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  //const[currentState, function Allowing Us to Update currentState] = useState(default state);
  const[category, setCategory]= useState("");
  const [restaurant, setRestaurant] = useState("");
  const [menuItem, setItem] = useState(""); 
  const currentMenuItems = data.filter(stuff => {return (stuff.food_category == category) && (stuff.restaurant == restaurant)});

  function InstructionSwitch(){
    if(category && restaurant && menuItem){
      return <Instructions instructions={appInfo.instructions.allSelected}/>
    } else if(!category && restaurant && !menuItem){
      return <Instructions instructions={appInfo.instructions.onlyRestaurant}/>
    } else if(category && !restaurant && !menuItem){
      return <Instructions instructions={appInfo.instructions.onlyCategory}/>
    } else if(category && restaurant && !menuItem){
      return <Instructions instructions={appInfo.instructions.noSelectedItem}/>
    }else {
      return <Instructions instructions={appInfo.instructions.start}/>
    }
  }
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
     <CategoryColumn categories={categories} cat={category} setCategory={setCategory}/>

      {/* MAIN COLUMN */}
      <div className="container">
        <Header 
        title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}
        />
        {/* RESTAURANTS ROW */}
        <RestaurantsRow restaurants={restaurants} restaurant={restaurant} setRestaurant={setRestaurant}/>

       {/* INSTRUCTIONS GO HERE */} 
        {InstructionSwitch()}

        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems={currentMenuItems} menuItem={menuItem} setItem={setItem}/> 
        <DataSource dataSource={appInfo.dataSource}/>
      </div>
    </main>
  )
}

export default App
