import { MdSettingsApplications } from "react-icons/md";
import { useGetArtistDetailsQuery } from "../redux/services/spotifyCore";
import Loader from "./Loader";
import { Link } from "react-router-dom";



const DetailsHeader = ({artistId, songData}) => {
      //  const {data,isFetching} = useGetArtistDetailsQuery(artistId); //! api request not needed here
      //  if(isFetching) return <Loader/>;
       
      //  console.log(data?.data?.artist);
       console.log(songData)
       
  return (
    <div className='relative w-full flex flex-col py-12'>
        <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
          <div className="absolute inset-0 flex items-center">
            <img src={songData?.album?.images[0].url}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" 
            alt="" />

            <div className="ml-5">
              <p>
                {songData?.name}
              </p>
              {
                (artistId && (
                  <Link to={`/artists/${artistId}`}>
                  <p className="text-base text-gray-400 mt-2">{songData?.artists[0].name}</p>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}
export default DetailsHeader;



