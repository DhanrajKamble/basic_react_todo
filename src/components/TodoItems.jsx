import React from "react";
 const TodoItems = (props)=>{
    return (
        <div className="item-container">
            <input type="checkbox"></input>
            <span>{props.item}</span>
            <p>...</p>
        </div>
    );
 }

 export default TodoItems;