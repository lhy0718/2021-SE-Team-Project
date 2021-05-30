import React, { useContext } from 'react'
import './App.css'
import { useState } from 'react'
import LayoutCtrl from './components/LayoutCtrl'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import SelectSignup from './components/SelectSignup'
import Sugang from './components/Sugang'
import AttendanceCheck from './components/AttendanceCheck'

// test data
import { shareLectures, shareStudents } from './components/constants'

function App() {
  const [userObj, setUserObj] = useState({})

  const setUserObjCallback = (data) => {
    setUserObj(data)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <LayoutCtrl userObj={userObj}>
          <Route
            path="/"
            exact
            component={() => {
              if (userObj.id) {
                return <Home userObj={userObj} />
              }
              return <Login setUserObjCallback={setUserObjCallback} />
            }}
          />
          <Route path="/signup" exact component={SelectSignup} />
          <Route
            path="/signup/teacher"
            render={() => <Signup isStudentScreen={false} />}
          />
          <Route
            path="/signup/student"
            render={() => <Signup isStudentScreen={true} />}
          />
          <Route path="/sugang" component={Sugang} />
          <Route
            path="/attendance"
            render={() => (
              <AttendanceCheck
                studentsData={shareStudents} // test data
                lectureData={shareLectures[0]} // test data
                lectureHour={1} // test data, 수업 차시 숫자
              />
            )}
          />
        </LayoutCtrl>
      </BrowserRouter>
    </div>
  )
}

export default App
