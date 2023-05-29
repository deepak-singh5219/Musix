import { useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import 'swiper/css';
import 'swiper/css/navigation';
import { useGetPlaylistTracksQuery } from "../redux/services/spotifyCore";


const TopChartCard = (props) => {
  const {song,i,isPlaying,activeSong,handlePlayClick,handlePauseClick} = props;
  return (
    <div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2'>
      <h3 className="font-bold text-base text-white mr-3">{i+1}</h3>
      <div className="flex flex-1 flex-row justify-between items-center">
        <img className="w-16 h-16 rounded-lg" src={song?.track?.album?.images[0].url} alt="" />
        <div className="flex flex-1 flex-col justify-center mx-3">
        <p className="text-md font-bold text-white">
        <Link
          to={`/songs/${song?.track?.id}`}
          state={{song}}>
          {song?.track?.name}
       </Link>
       </p>
       <p className="text-sm text-gray-300 mt-1 truncate">
         <Link to={(song?.track?.artists)?`/artists/${song?.track?.artists[0]?.id}`:'/top-artists'}>
           {song?.track?.artists[0]?.name}
         </Link>
      </p>
        </div>
      </div>
      <PlayPause
       isPlaying={isPlaying}
       activeSong={activeSong}
       song={song}
       handlePause={handlePauseClick}
       handlePlay={() => handlePlayClick(song,i)}
      />
      </div>
  )
}

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
    const {data, isFetching, error} = useGetPlaylistTracksQuery();
    console.log(data);
    if(isFetching) return <div></div>;
    if(error) return <div></div>;

    const {items} = data;
    const topPlays = items.slice(items.length-10);
    const topCharts = items.slice(45,50);

  const handlePlayClick = (song,i) => {
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[300px] max-w-full flex flex-col'>
      <div className='w-full flex flex-col'>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl"> Top Charts</h2>
            <Link to='/top-charts'>
            <p className="text-gray-300 text-base cursor-pointer">
              See More
            </p>
            </Link>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          {
            topCharts?.map((item,i) => 
            <TopChartCard 
            key={item.track.id} 
            song={item} 
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
            />
            )
          }
        </div>

        <div className="flex flex-col w-full mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl"> Top Artists
          </h2>
            <Link to='/top-artists'>
            <p className="text-gray-300 text-base cursor-pointer">
              See More
            </p>
            </Link>
        </div>
          
          <Swiper
           slidesPerView="auto"
           spaceBetween={15}
           freeMode
           centeredSlides
           centeredSlidesBounds
           modules={[FreeMode]}
           className="mt-4"
          >
            {
              topPlays?.map((item,i)=> (
                <SwiperSlide
                key={item?.track.id}
                style={{width:'20%', height:'auto'}}
                className="shadow-lg rounded-full animate-slideright"
                >
                <Link to={(item?.track?.artists)?`/artists/${item?.track?.artists[0]?.id}`:'/top-artists'}>
                <img src={item?.track?.album?.images[0].url} alt="song-image" className="rounded-full w-full object-cover" />
                </Link>
                </SwiperSlide>
              ) )
            }

          </Swiper>
        </div>



      </div>
    </div>
  )
}

export default TopPlay;
export {TopChartCard};
