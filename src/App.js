import logo from './logo.svg';
import './App.css';
import { Button } from './component/Button';
import { ReactBenifits } from './component/ReactBenifits';
import { ReactLogo } from './component/ReactLogo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
       <ReactBenifits/>
       <ReactLogo/>
       <Button/>
      </header>
     
    </div>
    
  );
}

export default App;
