import React from 'react'
import{assets} from '../assets/assets'
import{useNavigate} from 'react-router-dom'



const TopBar = () => {

    const navigate = useNavigate();

    return(
        <div className='bg-black h-[10%] rounded-lg flex items-center'>
            <div className='w-8 ml-2 mb-3 flex justify-center items-center'>
                <img src={assets.spotify_logo} alt="Spotify Logo" />
            </div>
            <div className='flex items-center justify-center flex-grow'>
                <div onClick={() => navigate('/')} className='cursor-pointer flex flex-col items-center'>
                    <img className='w-7' src={assets.home_icon} alt="Home icon" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='cursor-text flex flex-col items-center'>
                    <img className='w-80' src={assets.search_bar} alt="Search bar" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar