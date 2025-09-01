import './custom.css'

function SectionOne() {
  return (
    <div className='section-one bg-bgSecondary'>
      <div className='section-one-content'>
        <div className="line-with-text">
          <span className="banner-line bg-primary"></span>
          <p className='text-text'>About me</p>
        </div>
        <div>
          <div className='section-one-title'>
            <p>Vision to Virtual <span className='text-white'>Product Developer</span></p>
          </div>
          <p className='text-text'>I’m a Software Developer based in Prishtina, Kosovo and Munich, Germany specializing in taking projects from concept to launch. I design interfaces, write clean code, and ensure every detail of the project stays on track—delivering polished, user-focused digital experiences.</p>
        </div>
        <p className='text-text'>Outside of work, you’ll usually find me paddling no matter the weather, getting lost in a good book, or exploring new ideas in design and technology.</p>
      </div>
    </div>
  )
}

export default SectionOne
