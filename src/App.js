// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav'
import Projects from './components/pages/Projects'
import AboutMe from './components/pages/AboutMe'
import FeaturedProject from './components/pages/FeaturedProject';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <Navbar />
    <div id="content">
    <AboutMe />
    <FeaturedProject />
    <Projects />

    </div>
    {/* Footer */}
    </>
  );
}

export default App;
