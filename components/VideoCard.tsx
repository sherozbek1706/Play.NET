import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill, BsPlay } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { Video } from "../types";
import CSS from "csstype";
interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  // console.log(post.caption);
  const [playing, setPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const h1Styles: CSS.Properties = {
    color: "#000000",
    fontSize: "16px",
    fontWeight: "500",
    paddingLeft: "20px",
    paddingTop: "5px",
  };

  const onVideoPress = () => {
    if (playing) {
      videoRef?.current?.pause();
      setPlaying(false);
    } else {
      videoRef?.current?.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted]);

  const good = () => {};
  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded ">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link href={`/profile/${post.postedBy._id}`}>
              <>
                <Image
                  width={62}
                  height={62}
                  className=" rounded-full"
                  src={post.postedBy.image}
                  alt="user-profile"
                  layout="responsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link href={`/profile/${post.postedBy._id}`}>
              <div className="flex items-center gap-2">
                <p className="flex gap-2 items-center text-xs md:text-lg font-bold text-primary">
                  {post.postedBy.userName.slice(0, 20)} {"  "}
                  {post.postedBy._id == "111112983872459897491" ? (
                    <GoVerified className="text-blue-400 text-md " />
                  ) : (
                    <> </>
                  )}
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden md:block ">
                  {post.postedBy.userName.slice(0, 20)}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 flex flex-col gap-4 relative">
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="rounded-xl"
        >
          <Link href={`/detail/${post._id}`}>
            <video
              src={post.video.asset.url}
              
              ref={videoRef}
              className="lg:w-[700px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
            ></video>
          </Link>
          {/* {isHover && ( */}
            <div className="absolute  bottom-[0px] lg:w-[700px]  rounded-2xl rounded-t w-[200px] flex justify-between pl-3 pr-3 bg-[#d5e2eb77] py-1 xl:w-[640px]">
              {playing ? (
                <button onClick={onVideoPress} className="p-3  bg-white rounded-full  shadow-lg">
                  <BsFillPauseFill className="text-[#03396c] text-xl lg:text-2xl hover:scale-[1.1] transition-css-uchun" />
                </button>
              ) : (
                <button onClick={onVideoPress} className="p-3 bg-white rounded-full shadow-md ">
                  <BsFillPlayFill className="text-[#03396c] text-xl lg:text-2xl hover:scale-[1.1] transition-css-uchun" />
                </button>
              )}
              {isVideoMuted ? (
                <button onClick={() => setIsVideoMuted(false)} className="p-3 bg-white rounded-full shadow-lg">
                  <HiVolumeOff className="text-[#03396c] text-xl lg:text-2xl hover:scale-[1.1] transition-css-uchun" />
                </button>
                
              ) : (
                <button onClick={() => setIsVideoMuted(true)} className="p-3 bg-white rounded-full shadow-md">
                  <HiVolumeUp className="text-[#03396c] text-xl lg:text-2xl hover:scale-[1.1] transition-css-uchun" />
                </button>
              )}
            </div>
          {/* )} */}
        </div> 
        
        
        
      </div>
      <div className="py-[20px]  font-semibold lg:pl-20 lg:text-sm  text-sm w-[300px] lg:w-[600px]">
            {post.caption.slice(0 , 250)}...
        </div>
    </div>
  );
};

export default VideoCard;
