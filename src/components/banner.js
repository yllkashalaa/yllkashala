import './custom.css'

function Banner() {
  return(
    <div>
      <span className="dot" style={{top: '10%', left: '20%'}}></span>
      <span className="dot" style={{top: '30%', left: '90%'}}></span>
      <span className="dot" style={{top: '40%', left: '5%'}}></span>
      <span className="dot" style={{top: '90%', left: '60%'}}></span>
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
          <p className='text-text'>Engineering solutions <span>by</span> by combining robust code, thoughtful design, <span>and</span> strategic project management.</p>
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
