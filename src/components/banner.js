import './custom.css';
import {useEffect, useState} from 'react';

function Banner() {
  const dotPositions = [
    { top: "50%", left: "90%" },
    { top: "20%", left: "70%" },
  ];

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {dotPositions.map((pos, index) => (
        <span
          key={index}
          className="dot neon-dot"
          style={{
            top: pos.top,
            left: pos.left,
          }}
        ></span>
      ))}
      <div className='banner-content'>

        <div className="line-with-text">
          <span className="banner-line bg-primary"></span>
          <p className='text-text'>Hi there, I'm</p>
        </div>

        <div className='info'>
          <p className='first-name'>Yllka</p>
          <p className='last-name'>Shala</p>
        </div>

        <div className='paragraphs'>
          <p className='text-text'>Engineering solutions <span>by</span> combining robust code, thoughtful design, <span>and</span> strategic project management.</p>
          {/* <p className='focus text-text'>Software Development | UI/UX Design | Project Management</p> */}
        </div>

        <div className="buttons flex gap-4 mt-4">
          <button className='button-1 bg-primary'>Check Code</button>
          <button className='button-2'>View Design</button>
          <button className='button-3'>Get in Touch</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
