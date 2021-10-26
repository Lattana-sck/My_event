import React from 'react'

function NavMenu() {
    return (
    
            <div className="w3-sidebar w3-bar-block" style={{ width: "20%", height:"100%", border: 'solid 1px lightgrey', paddingRight:'10px', paddingLeft:'10px'}}>
                <h3 className="w3-bar-item ">Filtres</h3>
                <select className="w3-bar-item w3-button" style={{ width: "100%", border:'solid 1px black'}}>
                    <option value='#'>Categories</option>
                    <option value='Concerts'>Concerts</option>
                    <option value='Musiques'>Musiques</option>
                    <option value='Atelier'>Atelier</option>
                    <option value='Spectacles'>Spectacles</option>
                    <option value='Sports'>Sports</option>
                </select>
                <br/>
                <input className="w3-bar-item" placeholder='Lieu' style={{ width: "100%", border:'solid 1px black'}}></input>
                <br/>
                <button className="w3-bar-item w3-button">FILTRER</button>
            </div>
    )
}

export default NavMenu
