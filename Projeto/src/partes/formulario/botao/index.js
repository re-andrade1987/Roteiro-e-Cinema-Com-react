import React from 'react'
import './botao.css'

function Botao(props) {
    return (
        <button className={props.cor === 'vermelha' ? 'botao-vermelho' : 'botao-padrao'}>
            {props.children}
        </button>
    );
}

export default Botao;