import './styles.css';
import React from 'react';
import { logo } from '../../assets/image';

export default function Logo() {
    return (
        <div className="logo">
            <img className="image" src={logo} />
            <p>
                <strong>Amanda Prates</strong> <i>Store</i>
            </p>
        </div>
    );
}
