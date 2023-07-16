import React, {useState} from "react";

const SetTime = () => {
    const [PresentTime, SetPresentTime] = useState();
    setInterval(() => {
        let  curDate = new Date().toLocaleTimeString(); 
        SetPresentTime(curDate);
   },1000) 
   
   
    let oldStyle = {
        margin : "0px" , height : "100vh" , width : "100vw" , backgroundColor : "Red"
    }
    const [bgColor, setBgcolor] = useState(oldStyle);
    const [Reload, setReload] = useState("Reload");
    const PageReload = () => {
     let  oldStyle = {
        margin : "0px" , height : "100vh" , width : "100vw" , backgroundColor : "blue"
     }
        setBgcolor(oldStyle);
        setReload("Reload Done");
    }
    
    return (
        <>
            <div style={bgColor}>

            <h1>{PresentTime}</h1>
            
            </div>
        </>
    );



}
export default SetTime;