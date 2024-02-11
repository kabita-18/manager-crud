
import './App.css'
import UpdateManager from './UpdateManager'
import AddManager from './AddManager'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    
    
     <Router>
      <Routes>
        <Route path='/' element={<h1>Welcome</h1>}></Route>
        <Route path='/updatemanager' element={ <UpdateManager/>}></Route>
        <Route path='/addmanager' element={ <AddManager/>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
