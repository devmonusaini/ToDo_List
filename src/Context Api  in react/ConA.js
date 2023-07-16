import React, {createContext} from "react";
import ConB from './ConB';

const FirstName = createContext(); 
const LastName = createContext(); 


const ConA = () => {
    return (
        <>
            <FirstName.Provider value={"monu"}>
            <LastName.Provider value={"saini"}>
               
                <ConB />
            </LastName.Provider>
            </FirstName.Provider>
                
        </>
    );
}
export default ConA;
export { FirstName ,LastName };