import React, { useState } from 'react';
import TodoListCard from './TodoListCard';
import './TodoStyle.css';

const Todo = () => {
    
    const [oldValue, setOldValue] = useState("");
    const changeEvent = (event) => {
        setOldValue(event.target.value);
    }
    const [newValue, setNewValue] = useState([]);
    const onSubmit = () => {
        setNewValue((preValue) => [
            ...preValue,
            oldValue,
        ])
        setOldValue("");
    }
    const deleteItem = (id) => {
        setNewValue((preValue) => {
           return preValue.filter((curEle , index) => {
               return  id!==index;                
            })
        })
    }

    return (<>
        <div className='container'>
            <div className='box'>
                <div className='minibox'>
                    
                    <input type="text" value={oldValue}   onChange={changeEvent}  placeholder='enter anything'></input>

                <button  onClick={onSubmit}>+</button>
                </div>
                <div className='minibox2'>
                    {
                        newValue.map((value ,id) => {
                            return  <TodoListCard
                                        key={id}
                                        id={id} 
                                        onSelect={deleteItem}
                           button             new = {value}
                                        />
                        })
                   }
               </div>
            </div>
        </div>
        
    </>);

}
export default Todo;
