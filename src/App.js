import './style/style.css';
import Reserve from './components/Reserve';
import Home from './components/Home';
import {Route, Routes} from "react-router-dom"
 
function App() {
  
 
  return (
    <div className="App">
        <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/reserve' element={<Reserve/>} />
        </Routes>
        

        <footer>
            <div className="inner-footer">
                <h3>dine</h3>
                <ul>
                  <li>Marthwaite, Sedbergh</li>
                  <li>cumbria</li>
                  <li>+00 44 123 4567</li>
                </ul>
                <ul>
                    <li>open times</li>
                    <li>MON - FRI: 09:00AM -  10:00PM</li>
                    <li>SAT - SUN: 09:00AM -  11:30PM</li>
                </ul>
            </div>
        </footer>
    </div>
  );
}


export default App;
