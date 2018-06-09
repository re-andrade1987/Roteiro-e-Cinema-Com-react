import React from 'react';
import Logomarca from '../img/Logomarca.jpg';
import './Nav.css';

function Lista(props) {

    return (
        <ul className="links">
            <li>
                <a href="acerteoalvo.html" data-transition="flip">ACERTE O ALVO ROTEIRISTA</a>
            </li>
            <li>
                <a href="sobreroteiro.html" data-transition="flip">SOBRE ROTEIRO</a>
            </li>
            <li>
                <a href="salaroterista.html" data-transition="flip">SALA DE ROTEIRISTAS</a>
            </li>
            <li>
                <a href="producoes.html" data-transition="flip">PRODUÇÕES</a>
            </li>
        </ul >
    )
}

// Repetir lista usando o Map
/*const links = [
       {
           menu: 'ACERTE O ALVO ROTEIRISTA',
           link: 'acerteoalvo.html'
       },
       {
           menu: 'Sobre Roteiro',
           link: 'sobreroteiro.html'
       }

   ]
   return (
           <ul>

               {links.map((link => {

                   return (

                       <li>
                           <a href={link.link} data-transition="flip">{link.menu}

                           </a>
                       </li>


                   )
               }))}*/

export default Lista