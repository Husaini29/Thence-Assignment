import './App.css'
import { HomePage } from './pages/HomePage';
import { Routes, Route } from "react-router-dom"
import RegistrationPage from './pages/RegistrationPage';
import RedirectPage from './pages/RedirectPage';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header/>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/registration" element={<RegistrationPage/>} />
        <Route path="/redirect" element={<RedirectPage/>} />
     </Routes>
    </div>
  )
}

export default App
