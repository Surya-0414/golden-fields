import React from 'react';

const YouTube = () => {
  return (
    <div className='container'>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>


      <marquee behavior="scroll" direction="right">
        <h2>eww</h2>
      </marquee>
    </div>
  );
};

export default YouTube;
