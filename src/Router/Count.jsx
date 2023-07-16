import React, { useState } from "react";
import '../Count.css';

const Count = () => {
    
    const arr = [
        { id:1 , name:"vinod" ,dgree:"mca" },
        {  id:2 , name:"thapa" ,dgree:"bca" }, 
        { id:3 , name:"sir" ,dgree:"ma" }
    ];
    const newarr = arr.map((value) => {
        return `${value.id} my name is ${value.name} and my array is ${value.dgree}`;
    })
    console.log(newarr);




    const [Increment, setIncrement] = useState(0);

    const IncrementValue = () => {
        setIncrement(Increment + 1); 
}

    const DincrementValue = () => {
        if (Increment > 0) {
            setIncrement(Increment - 1);
                
        }
        else {
            alert("lessthen of zero is not possible");
            setIncrement(0);
        }
    }
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="count_box">
                    <h1>{Increment}</h1>

                    <div className="btn">
                        <button onClick={IncrementValue}> Increment </button>
                        <button onClick={DincrementValue}>Dincrement</button>
                  </div>
                </div>
            
            </div>
        
        </React.Fragment>

    );
}
export default Count;