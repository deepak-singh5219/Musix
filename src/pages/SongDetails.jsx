import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTrackLyricsQuery, useGetPlaylistTracksQuery} from "../redux/services/spotifyCore";
import { useState } from "react";




const SongDetails = (props) => {
    const location = useLocation();
    const {songid} = useParams(); 
    const dispatch = useDispatch();
    const {data, isFetching, error} = useGetTrackLyricsQuery(songid);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const {song} = location.state;

    if(isFetching) return <Loader/>;
   
    return (
        <div className='text-white'>
            <DetailsHeader artistId={song?.track?.artists[0].id} songData={song?.track}/>

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold"> 
                   Lyrics:
                </h2>
                <div className="mt-5">
                    {
                        data?.lyrics?.lines?.map((line,i) => {
                            return (<p className='text-gray-400 text-base my-1'>{line?.words}</p>);  
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SongDetails;
