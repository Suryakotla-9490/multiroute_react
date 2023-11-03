import './App.css';
import  { Outlet, Route,Routes } from 'react-router-dom'
import Navbar from './Rout/Navbar';
import Home from './Rout/Home/Home';
import Covid from './Rout/Covid';
import Fetchani from './Rout/Anime/Fetchani'
import Foodrapi from './Rout/foodapi/Foodrapi'
import Cardind from './Rout/foodapi/Cardind'



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Covid' element={<Covid/>}/>
      <Route path='/Recipe' element={<Foodrapi/>}/>
      <Route path="/user/:recipeingredient" element={<Cardind/>} />

      <Route path='/Anime' element={<Fetchani/>}/>
    
     </Routes>

     <Outlet/>
    </div>
  );
}

export default App;
