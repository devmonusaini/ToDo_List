import React from "react";


const ImageComponent = (props) => {
    
    return (
        <>
            <div className="ImageCom">
                

            <img
                    src={props.srcValue}
                    alt={ props.altValue} 
                    
                    />

               </div>
           
        </>
    );
}
export default ImageComponent;