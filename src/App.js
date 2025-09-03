import './App.css';
import './components/custom.css'
import Header from './components/header';
import Banner from './components/banner';
import SectionOne from './components/section-one';
import Skills from './components/skills';
import Footer from './components/footer';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects';

function App() {
  return (
    <div className="App bg-bgPrimary">
      <Header />
      <Banner />
      <SectionOne />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
