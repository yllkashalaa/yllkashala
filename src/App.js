import logo from './logo.svg';
import './App.css';
import './components/custom.css'
import Header from './components/header';
import Banner from './components/banner';
import SectionOne from './components/section-one';
import Skills from './components/skills';

function App() {
  return (
    <div className="App bg-bgPrimary">
      <Header />
      <Banner />
      <SectionOne />
      <Skills />
    </div>
  );
}

export default App;
