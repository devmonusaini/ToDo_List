import React, { useEffect, useState } from "react";
import axios from "axios";


const UseEffect = () => {
    // const [data, setData] = useState({});
    
    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
            console.log(res.data.name);
            // setData(res.data.name);      
        }
        
        getData();
    })

    const [choice, setChoice] = useState();
    const changeEvent = (event) => {
        setChoice(event.target.value);
    }

    return (
        <>
            <div style={{height : "500px" , width : "500px" , display : "flex " , justifyContent : "center" , alignItems:"center" ,flexDirection : "column" }}>

                <h1>{choice }</h1>
                <select value={choice} onChange={changeEvent}>
                    <option value="1">Val 1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>                    
                </select>
            </div>

                {/* <div className="users">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div> */}

        </>
    );

}
export default UseEffect;