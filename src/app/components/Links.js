"use client";

import Link from "next/link";
import { faDiscord, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { antelocode, codewars, fiverr, github, leetcode, portofolio, youtube } from '@/data/dataLink'
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { HoverContext } from "@/context/HoverContext";

export default function Links(props) {
    const { setHovered } = useContext(HoverContext)

    return (
        <div className='space-y-3 flex flex-col'>
          <Link href={antelocode} target='_blank'>
            <div className='w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-[#181818] dark:border-slate-200 hover:bg-main-1 hover:text-white dark:hover:text-[#181818] dark:hover:bg-slate-200 dark:hover:border-neutral-200 px-5 py-4 text-black dark:text-white space-x-3 flex items-center duration-200' onMouseEnter={() => setHovered("Antelocode")} onMouseLeave={() => setHovered(false)}>
              <FontAwesomeIcon icon={faFile} className='text-xl'/>
              <span>
                Get to know more
              </span>
            </div>
          </Link>
          {/* <Link href={codewars} target='_blank'>
            <div className='w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-[#181818] dark:border-slate-200 hover:bg-[#181818] hover:text-neutral-200 dark:hover:text-[#181818] dark:hover:bg-slate-200 dark:hover:border-neutral-200 px-5 py-4 text-black dark:text-neutral-200 space-x-3 flex items-center duration-200' onMouseEnter={() => setHovered("Codewars")} onMouseLeave={() => setHovered(false)}>
              <img src='https://www.codewars.com/packs/assets/logo.f607a0fb.svg' className='w-6'/>
              <span>
                Codewars
              </span>
            </div>
          </Link>
          <Link href={leetcode} target='_blank'>
            <div className='w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-[#181818] dark:border-slate-200 hover:bg-[#181818] hover:text-neutral-200 dark:hover:text-[#181818] dark:hover:bg-slate-200 dark:hover:border-neutral-200 px-5 py-4 text-black dark:text-neutral-200 space-x-3 flex items-center duration-200' onMouseEnter={() => setHovered("Leetcode")} onMouseLeave={() => setHovered(false)}>
              <img src='/leetcode.png' className='w-6'/>
              <span>
                Leetcode
              </span>
            </div>
          </Link> */}
          <Link href={fiverr} target='_blank'>
            <div className='w-full rounded-xl bg-transparent dark:bg-transparent border-2 border-[#181818] dark:border-slate-200 hover:bg-main-1 hover:text-white dark:hover:text-[#181818] dark:hover:bg-slate-200 dark:hover:border-neutral-200 px-5 py-4 text-black dark:text-white space-x-3 flex items-center duration-200' onMouseEnter={() => setHovered("Fiverr")} onMouseLeave={() => setHovered(false)}>
              <img src='/fiverr.png' className='w-6'/>
              <span>
                Fiverr
              </span>
            </div>
          </Link>
          {/* <Link href={youtube} target='_blank'>
            <div className='w-full rounded-xl bg-[#CC0000] border-2 border-[#CC0000] hover:bg-transparent hover:text-[#CC0000] duration-200 px-5 py-4 text-white space-x-3 flex items-center'>
              <FontAwesomeIcon icon={faYoutube} className='text-xl'/>
              <span>
                youtube
              </span>
            </div>
          </Link> */}
        </div>
    )
}
