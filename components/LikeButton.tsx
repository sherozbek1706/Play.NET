import axios from 'axios'
import React , { useState , useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'
// import handler from '../pages/api/auth'

import useAuthStore from '../store/authStore'
import { BASE_URL } from '../utils'

interface IProps {
  handleLike: () => void;
  handleDisLike: () => void;
  likes : any[];
}

const LikeButton = ( {likes, handleDisLike , handleLike }: IProps) => {

  const [alReadyLiked , setAlReadyLiked] = useState(false)
  const { userProfile }:any = useAuthStore();
  const filterLikes = likes?.filter((item) => item._ref === userProfile?._id);

  useEffect(() => {
    if(filterLikes?.length > 0){
      setAlReadyLiked(true);
    }else{
      setAlReadyLiked(false)
    }
  } , [filterLikes , likes])

  return (
    <div className='flex gap-6'>
      <div className='mt-4 flex flex-col justify-center items-center cursor-pointer' >
        {alReadyLiked ? (
          <div className='bg-primary rounded-full p-2 md:p-4 text-[#f51997]' onClick={handleDisLike} >
            <MdFavorite className='text-lg md:text-2xl ' />
          </div>
        ) : (
          <div className='bg-primary rounded-full p-2 md:p-4 ' onClick={handleLike} >
            <MdFavorite className='text-lg md:text-2xl ' />
          </div>
        )}
        <p className='text-md font-semibold' >{ likes?.length || 0 } </p>
      </div>
    </div>
  )
}

export default LikeButton
