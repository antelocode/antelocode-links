"use client";

import { HoverProvider } from "@/context/HoverContext";
import FloatDescription from "./components/FloatDescription"
import LetsConnect from "./components/LetsConnect"
import Links from "./components/Links"
import Profile from "./components/Profile"
import Switch from "./components/Switch"

export default function Home() {
  return (
    <HoverProvider>
      <main
        className={`w-full min-h-screen grid place-content-center bg-white dark:bg-[#101010] duration-100`}
      >
        <Switch/>
        <FloatDescription/>
        <div className='py-20 md:py-0 w-[50vh] md:w-[43vh] lg:w-[40vh] p-5 flex flex-col justify-center item-center'>
          <Profile/>
          <Links/>
          <LetsConnect/>
        </div>
      </main>
    </HoverProvider>
  )
}
