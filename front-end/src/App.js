import {BrowserRouter as Router, Routes , Route} from "react-router-dom"

import Home from "./pages/Home";
import Index from'./pages/AllFunkos';
import Edit from "./pages/Edit";
import NewFunko from "./pages/NewFunko";
import Show from './pages/ShowFunko'
import Navbar from './components/Navbar'


function App(){
  return(
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/funkos' element={<Index/>}/>
          <Route path ='/funkos/new' element={<NewFunko/>}/>
          <Route path ='/funkos/:index' element ={<Show/>}/>
          <Route path ='/funkos/:index/edit' element={<Edit/>}/>

        </Routes>
      </main>
    </Router>
  )
}
 export default App;