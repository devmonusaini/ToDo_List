import React from "react";
import { Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import Navbar from "./Router/Navbar";
import './App.css';
import GoogleKeeps from "./Router/GoogleKeeps";
import Whether from "./Router/Whether";
import Search from "./Router/Search";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/todo" Component={Todo} />

                <Route path="/googleKeeps" Component={GoogleKeeps} />
                <Route path="/whether" Component={Whether} />
                <Route path="/search" Component={Search} />
                
            </Routes>
        </>
    );
}
export default App;
