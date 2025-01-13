import React from 'react'

const Gallery3 = () => {
  return (
    <div className='h-screen relative'>
        <div>
            <div className='p-20'>
                <h1 className='text-2xl font-sans font-light tracking-wide'>teenage engineering <br />field system</h1>
                <a href="/"><div className='inline-block mt-4 text-red-600 text-lg tracking-wide font-sans hover:underline'>explore</div>
                </a>
            </div>
            <div className='flex justify-center absolute top-0 right-0 -z-10'>
                <VideoPlayer />
            </div>
        </div>
    </div>
  )
}

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';

const VideoPlayer = () => {
  return (
    <div className='w-screen h-screen'>
      <MediaPlayer 
        load="eager" 
        title="Product" 
        src="/videos/music.mp4" 
        autoPlay // Enable autoplay
        muted // Mute the video to allow autoplay
        loop // Enable looping
      >
        <MediaProvider />
      </MediaPlayer>
    </div>
  );
};

export default Gallery3


