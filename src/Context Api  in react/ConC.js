import React, { useContext } from "react";
import { FirstName ,LastName } from "./ConA";

const ConC = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h1>this is a {fname} {lname }</h1>
            

            {/* <FirstName.Consumer>
                {(value) => {
                   return <LastName.Consumer>
                        {(lastValue) => {
                            return <h1>this is a {value} {lastValue }</h1>
                            
                       }}
                
                   </LastName.Consumer>
                }}  
            </FirstName.Consumer> */}
        </>
    );

}
export default ConC;