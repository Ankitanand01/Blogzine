// import logo from './logo.svg';

import Cards from './components/Cards';
import Highlights from './components/highlights';
import Sponsored from './components/Sponsored';
import "./styles/nav.css"
import './styles/footer.css'
import Nav from './components/Nav';
import SocialCards from './components/SocialCards';
import "./styles/social.css"




function App() {
  return (
    <div className="App">
      <Nav />
      <Cards />
      <Highlights />
      <SocialCards/>
      <Sponsored/>
      </div>
  
  );
}

export default App;
