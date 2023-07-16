import React from "react";

const GoogleKeepsCard = (props) => {
   return (<>
        <div className='GoogleKeeps_box2'>
           <h3>{props.text}</h3><hr/>
           <p>{props.para}</p>
           <button className="addbtn2"
               onClick={() => {
               props.onSelect(props.id)
           }}
           >x</button>
       </div>
    </>);
}
export default  GoogleKeepsCard;
