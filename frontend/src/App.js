import React from 'react'
import './App.css'
import { useState } from 'react'
import LayoutCtrl from './components/LayoutCtrl'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const [userObj, setUserObj] = useState({
    id: 1,
    email: '',
    name: '김교수',
    type: 'T',
    phone: '',
    grade: 1,
  })

  return (
    <div className="App">
      <BrowserRouter>
        <LayoutCtrl userObj={userObj}>
          {/* <Route path="/" exact component={!!userObj ? Home : Login} /> */}
          {/* <Route path="/signup" component={Signup} /> */}
        </LayoutCtrl>
      </BrowserRouter>
    </div>
  )
}

export default App
