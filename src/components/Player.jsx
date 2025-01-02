import React from 'react'
import { assets,  } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react';

const Player = () => {

    const {track, seekBar, seekBg, isPlaying, play, pause, time, previous, next, seekSong} = useContext(PlayerContext);

    return (
        <div className='bg-black w-full flex justify-between items-center text-white '>
                <div className='flex items-center justify-start'>
                    <img className='w-12' src={track.image}  />
                    <div>
                        <p className='pl-3'>{track.name}</p>
                        <p className='pl-3'>{track.desc.slice(0,12)}</p>
                    </div>
                </div>
                <div className='flex flex-col place-items-center'>
                <div className='flex  gap-3' >
                    <img src={assets.shuffle_icon} className='w-5 cursor-pointer' />
                    <img onClick ={next} src={assets.prev_icon} className='w-5 cursor-pointer' />
                    {isPlaying
                    ?<img onClick={pause} src={assets.pause_icon} className='w-5 cursor-pointer' /> 
                    :<img onClick={play} src={assets.play_icon} className='w-5 cursor-pointer' />
                    }
                    <img onClick={next} src={assets.next_icon} className='w-5 cursor-pointer' />
                    <img src={assets.loop_icon} className='w-5 cursor-pointer' />
                    
                </div>
                <div className='flex items-center gap-5'>
                        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                        <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                            <hr ref={seekBar} className='h-1 border-none w-[0%] bg-green-800 rounded-full'></hr>
                        </div>
                        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                    </div>
            
                </div>
                

                <div className='flex items-center justify-end gap-3 pr-2'>
                    <img src={assets.plays_icon} className='w-5 cursor-pointer' />
                    <img src={assets.queue_icon} className='w-5 cursor-pointer' />
                    <img src={assets.speaker_icon} className='w-5 cursor-pointer' />
                    <img src={assets.mini_player_icon} className='w-5 cursor-pointer' />
                    <img src={assets.volume_icon} className='w-5 cursor-pointer' />
                    <div className='w-20 bg-slate-50 h-1 rounded-full'>

                    </div>
                    <img src={assets.zoom_icon} className='w-5 cursor-pointer' />
                </div>

               

            

        </div>
    )
}

export default Player
