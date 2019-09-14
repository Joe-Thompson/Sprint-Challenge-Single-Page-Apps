import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/episode')
            .then(res => {
                setEpisode(res.data.results);
            })
            .catch(err => console.log(err));
    }, [setEpisode]);


    return (
        <div className='episode-list grid-view'>
            {episode.map(episode => {
                console.log(episode);
                return ( <EpisodeCard key={episode.id} episode={episode} />);
            })}
        </div>
    )
};