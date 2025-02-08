import React from 'react';
import './styles.css';

export default function Menu() {
    const options = ['Categorias', 'Minha estante', 'Favoritos', 'Sobre Nós'];

    return (
        <div className="menu">
            <ul className="options">
                {options.map((option, index) => {
                    return (
                        <li key={index} className="option">
                            <p>{option}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
