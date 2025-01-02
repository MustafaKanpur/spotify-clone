import React from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Player from './components/Player'
import Display from './components/Display'
import {  PlayerContext } from './context/PlayerContext'
import { useContext } from 'react'

const App = () => {

  const {audioRef, track} = useContext(PlayerContext);

  return(
    <div className='h-screen bg-white'>

      <TopBar/>
      <div className='h-[90%] flex'>
        <Sidebar/>
       <Display/>
      </div>
    
      <div  className='h-[10%] flex position-fixed'>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio>

      </div>
    </div>
  )
}

export default App