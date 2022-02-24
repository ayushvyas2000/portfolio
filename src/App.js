import './App.scss';
import {About,Footer,Header,Projects,Skills} from './containers'
import {Navbar} from './components'
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
