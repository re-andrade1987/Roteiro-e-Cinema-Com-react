import React from 'react';
import Botao from '../formulario/botao'
import logo from './logo.jpg'
import './navbar.css'

function Navbar(props) {
    function handleClick(e) {
        if (props.usuario) {
            props.deslogaUsuario();
        } else {
            props.logaUsuario();
        }
    }

    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} />

            <ul>
                <li>
                    <a>Quem somos</a>
                </li>
                <li>
                    <a>
                        <Botao cor="vermelha">
                            Contato
                        </Botao>
                    </a>
                </li>
                <li>
                    <a onClick={handleClick}>
                        {props.usuario ? 'Sair' : 'Login'}
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar