import React from 'react'
import{assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar  = () => {

   

  return(
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex flex-items-start'>
        <div className='bg-[#121212] h-[100%] rounded-lg'>
            <div  className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.plus_icon} />
                </div>

                </div>
                <div className='bg-[#1F1F1F] h-[25%] rounded-lg m-2 font-bold flex-col justify-start gap-3 pl-4 pt-4'>
                    <h1>
                        Create your first playlist
                    </h1>
                    <p className='text-sm pt-2 font-semibold '>
                        It's easy, we'll help you
                    </p>

                    <button className='bg-white text-black text-sm rounded-xl px-4 py-1 my-4 font-bold'>
                        Create playlist
                    </button>
                </div>

                <div className='bg-[#1F1F1F] h-[25%] rounded-lg m-2 my-6 font-bold flex-col justify-start gap-3 pl-4 pt-4'>
                    <h1>
                        Let's find some podcasts to follow
                    </h1>
                    <p className='text-sm pt-2 font-semibold '>
                        You'll never catch up :) 
                    </p>

                    <button className='bg-white text-black text-sm rounded-xl px-4 py-1 my-4 font-bold'>
                        Browse podcasts
                    </button>
                </div>
        </div>

    </div>
  )
}

export default Sidebar