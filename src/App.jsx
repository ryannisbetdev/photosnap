import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header';
import Footer from './components/footer';
import Homepage from './pages/homepage/homepage';
import Stories from './pages/stories/stories';
import Features from './pages/features/features';
import Pricing from './pages/pricing/pricing';

function App() {

  return (
    <>
      <Router>
        <Header />
          <div className="page__container">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/stories" element={<Stories />}></Route>
              <Route path="/features" element={<Features />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
            </Routes>
          </div>
        <Footer />
      </Router>
    </>
  )
}

export default App