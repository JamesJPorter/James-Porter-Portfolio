// import logo from './logo.svg';
import './App.css';
import Navbar from './Nav'
import Projects from './Projects'
import AboutMe from './AboutMe'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <Navbar />
    <div id="content">
    <AboutMe />
    <Projects />

    </div>
    {/* Footer */}
    </>
  );
}

export default App;
