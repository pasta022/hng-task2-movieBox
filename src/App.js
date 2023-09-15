import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Movies from './pages/Movies'
import SearchResults from './pages/SearchResults'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/movies/:id' element={<Movies />} />
        {/* <Route path="/searchResults" element={<SearchResults/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
