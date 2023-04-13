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
  const {song,i} = props;
  return (
    <div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2'>{song.name}</div>
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
    const topPlays = items.slice(items.length-5);

  const handlePlayClick = () => {
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col'>
      <div className='w-full flex flex-col'>
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl"> Top Charts
          </h2>
            <Link to='/top-charts'>
            <p className="text-gray-300 text-base cursor-pointer">
              See More
            </p>
            </Link>
        </div>

        <div className="flex flex-col gap-1 mt-4">
          {
            topPlays?.map((item,i) => <TopChartCard key={item.track.id} song={item.track} i={i}/>)
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
                style={{width:'25%', height:'auto'}}
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
