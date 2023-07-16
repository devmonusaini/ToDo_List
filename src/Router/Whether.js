import React, { useEffect, useState } from "react";
import './Whether.css';
import logo from '../image/cloud-solid.svg';

const Whether = () => {
    const [search, setSearch] = useState();
    const [cityName, setCityName] = useState("jaipur");
    const [name, setName] = useState();
    const [cloud, setCloud] = useState();
    const [country, setCountry] = useState();

    const [temprature, setTemprature] = useState();
    const [maxTemp, setMaxTemp] = useState();
    const [minTemp, setMinTemp] = useState();


    let div = temprature - 273.75;
    div = `${div.toFixed(1)}c`;

 let div2 = maxTemp - 273.75;
    div2 = `${div2.toFixed(1)}c`;

 let div3 = minTemp - 273.75;
    div3 = `${div3.toFixed(1)}c`;

    const InputEvent = (event) => {
        setSearch(event.target.value);
    }
    const submit = () => {
        setCityName(search);
        setSearch("");
    }
    
    useEffect(() => {
        
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ec9a7d1d89e7dae8f87414c672318cf8`
            const response = await fetch(url);
            const resjson = await response.json();
       
            setTemprature(resjson?.main?.temp);
            setName(resjson.name);
            setCloud(resjson?.clouds?.all);
            setCountry(resjson?.sys?.country);
            setMaxTemp(resjson?.main?.temp_max);
            setMinTemp(resjson?.main?.temp_min );
        }
        
        fetchApi();   
    })
    

    return (
        <>
            <div className="Whether">
                   
                <div className="Whetherbox">
                <div className="WhetherSearchbar">
                        <input type="text"  value={search} onChange={InputEvent} placeholder="Search..." />
                        <button onClick={submit} >Search</button>
                    </div>
                    <img className="cloudImg" src={logo} alt="logo" />
                    <h1>{name},<span style={{color :"orange"}}>{country}</span></h1>
                    <br />
                    
                    
                    <h1 ><span style={{color :"skyblue"}}>cloud :</span> { cloud}%</h1>
                    <h1>
                      <span style={{color :"red"}}>Temp :</span> {div}
                    </h1>
                    <br/>
                    <p style={{ color: "rgba(240, 248, 255, 0.884)" }}>maxTemp : {div2 } , minTemp : {div3}</p>
                
                </div>
                    
          </div>
        </>
    );
    
}
export default Whether;





































// import React, { useState } from "react";




// const App = () => {
    
//     const [name, setName] = useState("");
//     const nameChange = (event) => {
//         setName(event.target.value);
//     }
//     const [fullName, setFullName] = useState(name);
   
//     const [password, setPassword] = useState("");
//     const passChange = (event) => {
//         setPassword(event.target.value);    
//     }
//     const [fullPassword, setFullPassword] = useState(password);
//     const myfunction = (event) => {
//         event.preventDefault();
//         setFullName(name);
//         setFullPassword(password);
//     }

//     return (
//         <React.Fragment>
//             <div className="container">
//                 <form onSubmit={myfunction}>
//                     <h1>Hello : {fullName }</h1>
//                 <h1>Your password :{fullPassword}</h1>
//                 <label>Name :</label>
//                 <input type="text" onChange={nameChange} value={name} placeholder="enter your name"/>
//                     <label>password :</label>
//                 <input type="password" onChange={passChange} value={password} placeholder="enter your password" />
                
//                 <button type="submit">submit</button>
//                 </form>
//                 </div>
//                 </React.Fragment>
                
//                 );
//  }
// export default App;














































// import React, { useState } from "react";

// const App = () => {
    
//     const [fullName, setFullName] = useState({
//        fName : "",
//         lName: "",
//         email: "",
//         phone : "",
//     });

    
//     const valueChange = (event) => {
    
//         const value = event.target.value;
//         const name = event.target.name;

//         console.log(value, name);
        
//         setFullName((preValue) => {
            
//             if (name === "fName") {
//                     return {
//                         fName: value,
//                         lName : preValue.lName,
//                         email : preValue.email,
//                         phone : preValue.phone,
                    
//                  }

//                 }else if (name === "lName") {
//                     return {
//                         fName: preValue.fName,
//                         lName :value,
//                         email : preValue.email,
//                         phone : preValue.phone,

//                  }

//             }
//             else if (name === "email") {
//                     return {
//                         fName: preValue.fName,
//                         lName :preValue.lName,
//                         email : value,
//                         phone : preValue.phone,

//                  }

//                 }else if (name === "phone") {
//                     return {
//                         fName: preValue.fName,
//                         lName :preValue.lName,
//                         email : preValue.email,
//                         phone : value,

//                  }

//                 }


                
            
//         });





//     }
    
    
//     const myfunction = (event) => {
//         event.preventDefault();
//         alert("Form submitted");
//     }
   

//     return (
//         <React.Fragment>
//             <div className="container">
//                 <form onSubmit={myfunction}>
//                     <h1>Hello : {fullName.fName }</h1>
//                     <h1> your phone number :{fullName.phone}</h1>
//                     <h1>your email :{fullName.email}</h1>
//                 <h1>Your password :{fullName.lName}</h1>
//                     <label>Name :</label> <br />
//                     <input
//                         type="text"
//                         onChange={valueChange}
//                         value={fullName.fName}
//                         name="fName"
//                         placeholder="enter your name"
//                     /><br/>
//                     <label>phone :</label><br/>
//                        <input
//                            type="number"
//                            onChange={valueChange}
//                            value={fullName.phone}
//                            name="phone"
//                            placeholder="enter your phone number"
//                            /><br/>
                   
//                     <label>Email :</label><br/>
//                        <input
//                            type="email"
//                            onChange={valueChange}
//                            value={fullName.email}
//                            name="email"
//                            placeholder="enter your email"
//                        /><br/>
//                     <label>password :</label><br/>
//                     <input
//                         type="password"
//                         onChange={valueChange}
//                         value={fullName.lName}
//                         name="lName"
//                         placeholder="enter your password"
//                     /><br/>

//                 <button type="submit">submit</button>
//                 </form>
//                 </div>
//                 </React.Fragment>
                
//                 );
//  }
// export default App;





































// import React, { useState } from "react";




// const App = () => {
    
//     const [name, setName] = useState("");
//     const nameChange = (event) => {
//         setName(event.target.value);
//     }
//     const [fullName, setFullName] = useState(name);
   
//     const [password, setPassword] = useState("");
//     const passChange = (event) => {
//         setPassword(event.target.value);    
//     }
//     const [fullPassword, setFullPassword] = useState(password);
//     const myfunction = (event) => {
//         event.preventDefault();
//         setFullName(name);
//         setFullPassword(password);
//     }

//     return (
//         <React.Fragment>
//             <div className="container">
//                 <form onSubmit={myfunction}>
//                     <h1>Hello : {fullName }</h1>
//                 <h1>Your password :{fullPassword}</h1>
//                 <label>Name :</label>
//                 <input type="text" onChange={nameChange} value={name} placeholder="enter your name"/>
//                     <label>password :</label>
//                 <input type="password" onChange={passChange} value={password} placeholder="enter your password" />
                
//                 <button type="submit">submit</button>
//                 </form>
//                 </div>
//                 </React.Fragment>
                
//                 );
//  }
// export default App;