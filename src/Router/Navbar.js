import React from "react";
import { NavLink } from 'react-router-dom';
import '../Navbar.css';


const Navbar = () => {



    return (        
        <>
            <div className='Navbar_div'>
                <div className='Achor_div'>
                    <NavLink   to="/todo"> Todo</NavLink>
                    <NavLink   to="/googleKeeps"> GoogleKeeps</NavLink>
                    <NavLink   to="/whether"> Whether</NavLink>
                    <NavLink   to="/search"> Search </NavLink>
                             
                </div>

            </div>
        </>
    );
}
export default Navbar;