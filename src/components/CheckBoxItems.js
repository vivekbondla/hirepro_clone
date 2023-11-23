import React, { useState } from "react";
import Card from "../UI/Card";
import "./HomePage.css";

const checkBoxCategories = [
  "Frontend",
  "Backend",
  "Fullstack",
  "Devops",
  "Cloud",
  "Java",
];
const checkBoxLocations = [
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Bangalore",
  "Mumbai",
  "WFH",
];
const CheckBoxItems = () => {
  const [checkList, setCheckList] = useState([]);

  const handleCheckBox = (event)=>{
//   console.log(event.target.checked,event.target.value)
let updatedCheckList = [...checkList]
  if(event.target.checked){
     updatedCheckList = [...checkList,event.target.value]
  }else{
    updatedCheckList.splice(checkList.indexOf(event.target.value),1)
  }
  setCheckList(updatedCheckList)
  
  }
  return (
    <div className="filters">
    <Card className="filter">
        <h5>Categories</h5>
        <ul>{checkBoxCategories.map((item) => (
        <li key={item}><label htmlFor={item}><input id={item} value={item} type="checkbox" onChange={handleCheckBox}/>{item}</label></li>
      ))}</ul>
      
    </Card>
    <Card className="filter">
        <h5>Locations</h5>
        <ul>{checkBoxLocations.map((item) => (
        <li key={item}><label htmlFor={item}><input id={item} value={item} type="checkbox" onChange={handleCheckBox}/>{item}</label></li>
      ))}</ul>
      
    </Card>
    {checkList}
    </div>
   
  );
};

export default CheckBoxItems;



 // <div className="filters">
    //       <Card className="filter">
    //         <h5>Categories</h5>
    //         <ul>
    //           <li><label htmlFor="frontend"><input id="frontend" type="checkbox"/>Frontend</label></li>
    //           <li><label htmlFor="backend"><input id="backend" type="checkbox"/>Backend</label></li>
    //           <li><label htmlFor="fullstack"><input id="fullstack" type="checkbox"/>Full Stack</label></li>
    //           <li><label htmlFor="java"><input id="java" type="checkbox"/>Java</label></li>
    //           <li><label htmlFor="cloud"><input id="cloud" type="checkbox"/>Cloud</label></li>
    //         </ul>
    //       </Card>
    //       <Card className="filter">
    //         <h5>Location</h5>
    //         <ul>
    //           <li><label htmlFor="Hyderabad"><input id="hyderabad" type="checkbox"/>Hyderabad</label></li>
    //           <li><label htmlFor="bangalore"><input id="bangalore" type="checkbox"/>Bangalore</label></li>
    //           <li><label htmlFor="chennai"><input id="chennai" type="checkbox"/>Chennai</label></li>
    //           <li><label htmlFor="mumbai"><input id="mumbai" type="checkbox"/>Mumbai</label></li>
    //           <li><label htmlFor="delhi"><input id="delhi" type="checkbox"/>Delhi</label></li>
    //         </ul>
    //       </Card>
    //     </div>