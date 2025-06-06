import React from 'react'
import {hightlightsSlides} from '../../constants'

const VideoCarousel = () => {
  return (
    <>
    <div className='flex items-center space-x-4 overflow-x-scroll'>
      {hightlightsSlides.map((list,index)=>(
        <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
            <div className='video-carousel_container'>
                <div className='w=full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                    <video id='video' playsInline={true} preload='auto' muted>
                        <source src={list.video} type='video/mp4'/>
                    </video>

                </div>
                
            </div>
        </div>
      ))}
    
    </div>
    </>
  )
}
export default VideoCarousel;
