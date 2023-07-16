import React from "react";


function TodoListCard(props){
    return (<>
        <div>
            <button onClick={() => { props.onSelect(props.id);}} >X</button>
            <h3>{props.new}</h3>
       </div>
    </>
);
}
export default TodoListCard;