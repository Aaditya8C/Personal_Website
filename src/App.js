import './App.css';
import Header from './Modules/Header.js';
import Body from './Modules/Body.js';
import Education from './Modules/Education.js';
import Projects from './Modules/Projects';
import Footer from './Modules/Footer';
import Internships from './Modules/Internships';


function App() {
  return (

    <>
    <div className="mainContent">
      <Header />
      <Body />
      <Education />
      <Projects />
      <Internships />
      <br /><br />
      <Footer />
    </div>
    </>
    
  );
}

export default App;
