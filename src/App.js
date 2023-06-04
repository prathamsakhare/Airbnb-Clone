import logo from './logo.svg';
import './App.css';
import { Desrt2 } from './component/Desrt2';
import { NavBar } from './component/NavBar';
import { Loader } from './component/Loader';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Desrt2 />
    </div>
  );
}

export default App;
