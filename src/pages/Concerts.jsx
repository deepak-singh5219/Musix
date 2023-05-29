import React from 'react';
import { useGetConcertsQuery } from '../redux/services/spotifyCore';
import { Loader } from '../components';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


const ConcertCard = () => {
    const concert = {};
    return (
        <div 
  className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
  <div className="relative w-full h-56 group">
    
    <img src={""} alt="song-image" />
   </div>
   <div className="mt-4 flex flex-col">
    <p className="font-semibold text-lg text-white truncate">
    <Link
      to={`/concert/${""}`}
      state={{concert}}>
      {"song?.track?.name"}
   </Link>
    </p>
    <p className="text-sm text-gray-300 mt-1 truncate">
      {"song?.track?.artists[0]?.name"}
    </p>

   </div>
  </div>

    )
}

const Concerts = () => {
    const {data, isFetching, error} = useGetConcertsQuery();
    if(isFetching) return <Loader/>;

    console.log(data?.events);
    return(
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {
                data?.events?.map((concert,i) => <ConcertCard/>)
            }
        </div>
    )
}

export default Concerts;
