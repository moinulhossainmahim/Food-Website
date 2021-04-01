import './App.css';
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Expert from './components/Expert/Expert'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Copyright from './components/Copyright/Copyright'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <About />
      <Menu />
      <Expert />
      <Testimonials />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
