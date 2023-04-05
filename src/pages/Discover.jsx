import {Error, Loader, SongCard} from '../components';
import { genres } from '../assets/constants';
import { useGetAlbumTracksQuery, useGetAlbumsQuery, useGetPlaylistsQuery } from '../redux/services/spotifyCore';

const Discover = () => {
    // const {data, isFetching, error} = useGetAlbumsQuery();
    // const {data, isFetching, error} = useGetAlbumTracksQuery();
    const {data, isFetching, error} = useGetPlaylistsQuery();
    console.log(data);
    
 
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
        { [1, 2, 3, 4, 5, 6, 7, 8].map((song, i) =>
 <SongCard
          key={song.key}
          song={song}
          i={i}
          />
          )}  
      </div>
       </div>
    )
}



export default Discover;








