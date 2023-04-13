import {Error, Loader, SongCard} from '../components';
import { genres } from '../assets/constants';
import { useGetAlbumTracksQuery, useGetAlbumsQuery, useGetPlaylistTracksQuery, useGetPlaylistsQuery } from '../redux/services/spotifyCore';
import { useDispatch, useSelector } from 'react-redux';


const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetPlaylistTracksQuery();
    console.log(data);
    if(isFetching) return <Loader/>;
    if(error) return <Error/>;

    const {items} = data;

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-4 mb-10">
        <h2 className="text-white text-3xl text-left font-bold">Discover</h2>
        <select
          value=""
          onChange={() => {}}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {items?.map((song, i) =>
         <SongCard
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          />
          )}  
      </div>
       </div>
    )
}



export default Discover;








