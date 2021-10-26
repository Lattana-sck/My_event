import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Events() {

    const [events, setEvents] = useState(null);
    const [ville, setVille] = useState(null);
    const [categorie, setcategorie] = useState(null);
    const [uId, setuId] = useState(null);

    const history = useHistory();

    const handleId = (uId) => {
        history.push(`/eventdetails/${uId}`);
    }

    useEffect(() => {
        if (ville) {
            fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=15&refine.city=' + ville)
                .then(res => res.json())
                .then(data => {
                    setEvents(data.records);
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else if(categorie) {
            fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=15&refine.tags=' + categorie)
            .then(res => res.json())
            .then(data => {
                setEvents(data.records);
            })
            .catch(err => {
                console.log(err)
            })
        }
        else if(ville && categorie) {
            fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=15&refine.city=' + ville + '&refine.tag=' + categorie)
            .then(res => res.json())
            .then(data => {
                setEvents(data.records);
            })
            .catch(err => {
                console.log(err)
            })
        }
        else{
            fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=date_start%3E%3D2021%2F09%2F02&rows=100')
            .then(response => response.json())
            .then(data => {
                setEvents(data.records);
            })
            .catch(err => {
                console.log(err)
            });
        }
    }, [Events, ville, categorie]);

    console.log(events);



    if (!events) return <div>Chargement...</div>

    return (
        <>
            <div className="w3-sidebar w3-bar-block" style={{ width: "20%", height: "100%", border: 'solid 1px lightgrey', paddingRight: '10px', paddingLeft: '10px' }}>
                <h3 className="w3-bar-item ">Filtres</h3>
                <select className="w3-bar-item w3-button" style={{ width: "100%", border: 'solid 1px black' }} onChange={(e) => { setcategorie(e.target.value)}}>
                    <option value=''>Categories</option>
                    <option name='categorie' value='concert'>Concerts</option>
                    <option name='categorie' value='musique' >Musiques</option>
                    <option name='categorie' value='atelier' >Atelier</option>
                    <option name='categorie' value='spectacle' >Spectacles</option>
                    <option name='categorie' value='sport' >Sports</option>
                </select>
                <br />
                <input value={ville} onChange={(e) => { setVille(e.target.value) }} className="w3-bar-item" placeholder='Lieu' style={{ width: "100%", border: 'solid 1px black' }}></input>
                <br />
                <button className="w3-bar-item w3-button">FILTRER</button>
            </div>
            <div style={{ marginLeft: '25%' }}>
                <h1>Tous les évènements</h1>
                <p>
                    {events.map((event, index) => {
                        const link = `/eventdetails/${event.fields.uid}`;
                        return (

                            <div style={{ display: 'flex', paddingTop: '5px' }}>
                                <img style={{ float: 'left', width: '200px', height: '200px', borderRadius: '50%', border: 'solid 1px black' }} src={event.fields.image} alt='img' /><br />
                                <div style={{ padding: '10px', float: 'right' }}>
                                    <h3 style={{ textAlign: 'left' }}>{event.fields.title}</h3>
                                    <p>
                                        Ville : {event.fields.city}<br />
                                        Adresse : {event.fields.address}<br />
                                        Date : {event.fields.date_end}
                                    </p>
                                    <button>Organiser une sortie</button>
                                    <a href={link}><button>En savoir +</button></a>
                                </div>
                            </div>

                        )
                    })}
                </p>
            </div>
        </>
    )
}

export default Events
