import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Duruvan/Header';
import '../src/Duruvan/Style.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}
export default App;
