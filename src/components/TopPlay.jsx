import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
import 'swiper/css';
import 'swiper/css/navigation';
import { useGetGenreQuery, useGetPlaylistsQuery } from "../redux/services/spotifyCore";
useGetGenreQuery


const TopPlay = () => {
  const {data, isFetching, error} = useGetGenreQuery();
  const {content} = data;
  const topPlays = content?.slice(0,5);
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);

  const handlePlayClick = () => {
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div>Hello</div>
  )
}

export default TopPlay;
