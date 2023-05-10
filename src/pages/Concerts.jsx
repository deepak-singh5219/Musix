import React from 'react';
import { useGetConcertsQuery } from '../redux/services/spotifyCore';

const Concerts = () => {
    const {data, isFetching, error} = useGetConcertsQuery();
    console.log(data?.events);
    return(
        <div></div>
    )
}

export default Concerts;
