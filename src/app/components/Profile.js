"use client";

import { HoverContext } from "@/context/HoverContext";
import { faMicrochip, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useContext } from "react";

export default function Profile() {
    const { setHovered } = useContext(HoverContext);

    return (
        <div className='w-full flex flex-col items-center space-y-5 text-center mb-10'>
          <div className='w-24 h-24 rounded-full cursor-pointer relative overflow-hidden bg-[#16171B] dark:bg-white duration-200' onMouseEnter={() => setHovered("Profile")} onMouseLeave={() => setHovered(false)}>
            <Image src={'/img/logo.jpg'} width={300} height={300} layout="responsive"/>
          </div>
          <div className='grid dark:text-neutral-200 duration-200'>
            <div className='flex space-x-2 items-center justify-center'>
              <span className='text-2xl font-bold'>Antelo code</span>
              <FontAwesomeIcon icon={faMicrochip} className='text-orange-400 text-2xl cursor-pointer' onMouseEnter={() => setHovered("web developer")} onMouseLeave={() => setHovered(false)}/>
            </div>
            <span>Freelance Web developer with almost 3 years of experience</span>
          </div>
        </div>
    )
}