import React from 'react'
import {assets, songsData} from "../assets/assets"

const Player = () => {
  return (
    <div className=' h-[10%] flex bg-black justify-between items-center text-white px-4'>
        <div className='gap-4 lg:flex hidden items-center'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
       <p>{songsData[0].name}</p>
       <p>{songsData[0].desc.slice(0,12)}</p>
       </div>
        </div>
        <div className='flex items-center gap-1 flex-col m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.search_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>1:06</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='bg-green-800 w-0 border-none h-1 rounded-full'/>
                 
                </div>
                <p>3:06</p>

            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.play_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default Player
