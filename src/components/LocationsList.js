import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location')
            .then(res => {
                setLocation(res.data.results);
            })
            .catch(err => console.log(err));
    }, [setLocation]);

    return (
        <div className='location-list grid-view'>
            {location.map(location => {
                return ( <LocationCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length}/>);
            })}
        </div>
    )
};
