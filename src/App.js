import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThirdQuestion from './screens/ThirdQuestion'
import Home from './screens/Home'
import FirstQuestion from './screens/FirstQuestion'
import SecondQuestion from './screens/SecondQuestion'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/first" element={<FirstQuestion />} />
          <Route path="/second" element={<SecondQuestion />} />
          <Route path="/third" element={<ThirdQuestion />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
