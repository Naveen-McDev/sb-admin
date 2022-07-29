import React from "react";
import Data from "./Data";

function Card() {

    const card = [
        {
            id : 1,
            title : "Earning (Monthly)",
            value: "40,000",
            icon : "fa-calendar",
        },

        {
            id : 2,
            title : "Earnings (Annual)",
            value : "215,000",
            icon : "fa-dollar-sign"
        },

        {
            id : 3,
            title : "Tasks",
            value : "50",
            icon : "fa-clipboard-list"
        },

        {
            id : 4,
            title : "Pending Requests",
            value : "18",
            icon : "fa-comments"
        },
    ]

  return (
    <>
      
      {
          card.map((data) => 
           <Data pops = {data} ></Data>
          )
      }

      

     
    </>
  );
}

export default Card;
