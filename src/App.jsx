import { useState, useRef } from 'react'
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa'
import { FaMusic } from 'react-icons/fa'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleBackward = () => {
    audioRef.current.currentTime -= 10
  }

  const handleForward = () => {
    audioRef.current.currentTime += 10
  }

  return (
    <div className="app">
      <div className="music-note"><FaMusic /></div>
      <div className="music-note"><FaMusic /></div>
      <div className="music-note"><FaMusic /></div>
      <div className="music-note"><FaMusic /></div>
      <div className="media-player">
        <h1>Blue Tunes Player</h1>
        <div className={`vinyl ${isPlaying ? 'playing' : ''}`}></div>
        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />
        <div className="controls">
          <button onClick={handleBackward}><FaBackward /></button>
          <button onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleForward}><FaForward /></button>
        </div>
      </div>
    </div>
  )
}

export default App