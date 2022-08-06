import './App.css';
import Header from './Modules/JS/Header.js';
import Body from './Modules/JS/Body.js';
import Education from './Modules/JS/Education.js';
import Projects from './Modules/JS/Projects';
import Footer from './Modules/JS/Footer';
import Internships from './Modules/JS/Internships';


function App() {
  return (

    <>
    <div className="container">
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
