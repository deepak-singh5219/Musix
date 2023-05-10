import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/spotifyCore";
import { useState } from "react";
import { TopChartCard } from "../components/TopPlay";


const TopTrackCard = (props) => {
  const {song,i,key} = props;
  return(
    <div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2'>
    <h3 className="font-bold text-base text-white mr-3">{i+1}</h3>
    <div className="flex flex-1 flex-row justify-between items-center">
      <img className="w-16 h-16 rounded-lg" src={song?.track?.album?.coverArt?.sources[0].url} alt="" />
      <div className="flex flex-1 flex-col justify-center mx-3">
      <p className="text-md font-bold text-white">
        {song?.track?.name}
     </p>
      </div>
    </div>
    </div>
  )
}

const ArtistDetailsHeader = (props) => {
  const {artistData} = props;
  return (
    <div className='relative w-full flex flex-col py-12'>
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
      <div className="absolute inset-0 flex items-center">
        <img src={artistData?.visuals?.avatarImage?.sources[0].url}
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" 
        alt="" />

        <div className="ml-5">
          <p>
            {artistData?.profile?.name}
          </p>
              <p className="text-base text-gray-400 mt-2"><span className="text-white font-bold mr-2">Followers:</span>{artistData?.stats?.followers}</p>
        </div>
      </div>
    </div>
</div>
  )
}


const ArtistDetails = (props) => {
    const {id} = useParams(); 
    const {data, isFetching, error} = useGetArtistDetailsQuery(id);
    console.log('Artist Details',data);
    const artistData = data?.data?.artist;
    const topTracks = data?.data?.artist?.discography?.topTracks?.items;
    console.log('Top Tracks',topTracks);


    if(isFetching) return <Loader/>;
   
    return (
        <div className='text-white'>
            <ArtistDetailsHeader artistData={artistData}/>
            

            <div className="mb-10">
            <h2 className="text-white font-bold text-2xl mb-10">Top Tracks</h2>
            <div className="flex flex-col gap-1 mt-4">
           {
            topTracks?.map((item,i) => 
            <TopTrackCard 
            key={item.uid} 
            song={item} 
            i={i}
            />
            )
          }
        </div>
            </div>
        </div>
    )
}

export default ArtistDetails;
