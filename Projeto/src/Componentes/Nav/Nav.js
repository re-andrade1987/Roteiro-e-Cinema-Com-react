import React from 'react';
import Logomarca from '../img/Logomarca.jpg';
import Lista from './Lista';
import './Nav.css';

function Nav(props) {
    return (
        <nav className="nav">
            <img className="logomarca" src={Logomarca} />
            <Lista />
        </nav >
    )
}

export default Nav