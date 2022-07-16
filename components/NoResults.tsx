import React, { useState, useEffect, useRef } from "react";
import image from "next/image";
import { MdOutlineVideocamOff } from "react-icons/md";
import { BiCommentX } from 'react-icons/bi';
interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full font-bold'>
      <p className='text-8xl '  >
        {text == "No Comments yet" 
          ? <BiCommentX className="text-[#005b96]" /> 
          :  <MdOutlineVideocamOff  className="text-[#005b96]"  />
        }
        
      </p>
      <p className='text-2xl text-center'>{text}</p>
    </div>
  );
};

export default NoResults;
