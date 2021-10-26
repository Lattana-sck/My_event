import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EventDetails() {

    const params = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=15&refine.uid=" + params.id)
            .then(res => res.json())
            .then(res => {setEvent(res.records); console.log(res.records)})
            
    }, [params, Event])

    if (!event){
        return (
            <div>
                En cours de chargement...
            </div>
        )
    } else {
        const link = `/events`;
        return (
                <div>
                    <h1 style={{padding:'10px'}}>{event[0].fields.title}</h1>
                    <div style={{display:'flex', padding:'10px'}}>
                        <img src={event[0].fields.image} style={{ width:"40%"}}/>
                        <p style={{width:'60%', padding:'10px'}}>
                            date : {event[0].fields.date_start} <br/>
                            lieu : {event[0].fields.city} <br/><br/>
                        <button style={{width:'30%', padding:'10px'}}>Organiser une sortie</button>
                        </p>
                    </div>
                    <div style={{padding:'10px'}}>
                    <h1>
                        description : <br/>
                        </h1>
                    {event[0].fields.description}<br/><br/>
                    <a href={link}><button>Revenir en arrière</button></a>
                    </div>

                </div>
            )

        
        

    }
}

export default EventDetails
