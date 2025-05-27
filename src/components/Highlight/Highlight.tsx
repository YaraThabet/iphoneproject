import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'
import gsap from 'gsap';
import { rightImg, watchImg } from '../../utils';
import VideoCarousel from '../videoCarousel/videoCarousel';

const Highlight = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y:0,
    })
    gsap.to('.link',{
      opacity: 1,
      y:0,
      duration:1,
      stagger:0.25,
    })
  }, [])


  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex item-end justify-between' >
          <h1 id='title' className='section-heading'>the highlights.</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link '>Watch The Film</p>
            <img src={watchImg} alt='watch' className='ml-2'/>
          </div>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link '>Watch The Event</p>
            <img src={rightImg} alt='right' className='ml-2'/>
          </div>
        </div>
        <VideoCarousel/>
     
      </div>
    </section>
  )
}

export default Highlight;
