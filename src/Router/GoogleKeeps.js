import React, { useState } from 'react';
import GoogleKeepsCard from './GoogleKeepsCard';
import '../GoogleKeeps.css';

const GoogleKeeps = () => {

    const [data, setData] = useState({
        title: "",
        paragraph : "",
    });

    const ChangeEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
       
        setData((preValue) => {
           return{ ...preValue,
                [name] : value,
            }
        })
   
    }
    const [newData, setNewData] = useState([]);


    const addData = () => {

        // if(data.title ==="" && data.paragraph===""){
        //     alert("Please Enter Your Title");
        //     setNewData(false)
        //     // newData(false);
        // } else {

        // }
        setNewData((preValue) => [
            ...preValue,
            data,
            
        ])

   
        setData({
            title :"",
            paragraph : "",
        });

    }
    const deleteItem = (index) => {
        setNewData((preValue) => {
            return preValue.filter((curValue , id) => {
                return index !== id;
            })
        })
    }
    
    const [expend, setExpend] = useState(false);
    const [newExpend, setNewExpend] = useState(false);
    // const [Style, setStyle] = useState({height : "10vh"});
     
      
    const expendIt = () => {
        setExpend(true);
        setNewExpend(true);
        // setStyle(false);
    }
    return (
        <>
       

            {/* <div className='Navbar'>
            <h1>GoogleKeep</h1>
            </div> */}
            <div className='Main_GoogleKeeps'>
                <div className='GoogleKeeps_box' >
                    {expend?  
                    <input className="input1" type='text' name='title' value={data.title} onChange={ChangeEvent} placeholder='Title...' />
                    :null}
                    <input className="input2" type='text' name='paragraph' value={data.paragraph} onChange={ChangeEvent} onClick={expendIt} placeholder='write a note...' />
                    {newExpend?  
                    <button onClick={addData} className="addbtn1">+</button>
                    :null}
                  
                </div>
            </div>
            <div className='Main_GoogleKeeps2'>
                {
                    newData.map((value, index) => {
                        return (<GoogleKeepsCard
                            key={index}
                            text={value.title}
                            para={value.paragraph}
                             id={index}
                             onSelect={deleteItem}                          
                        />);
                                     
                    })
               } 
            </div>
          
        </>
    );

}
export default GoogleKeeps;