import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <nav style={{ display: 'inline-block', border:'solid 1px black', width: '100%' }}>
                <div>
                    <ul>
                        <li style={{ display: 'inline-block', paddingLeft: '10px'}}><Link to="/Events">Acceuil</Link></li>
                        <li style={{ display: 'inline-block', paddingLeft: '10px' }}><Link to="/Myaccount">Mon Profil</Link></li>
                        <li style={{ display: 'inline-block', paddingLeft: '10px' }}><Link to="/Connexion">Connexion</Link></li>
                        <li style={{ display: 'inline-block', paddingLeft: '10px' }}><Link to="/Inscription">Inscription</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}  