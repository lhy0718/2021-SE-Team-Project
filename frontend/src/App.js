import React, { useState, useEffect } from 'react'
import './App.css'
import LayoutCtrl from './components/LayoutCtrl'
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import SelectSignup from './components/SelectSignup'
import Sugang from './components/Sugang'
import AttendanceCheck from './components/AttendanceCheck'
import { useLocation } from 'react-router-dom'

// test data
import { shareLectures, shareStudents } from './components/constants'

function App() {
  const location = useLocation()

  const [userObj, setUserObj] = useState(
    location.state ? location.state.userObj : {},
  )

  useEffect(() => {
    setUserObj(location.state ? location.state.userObj : {})
    console.log(location)
  }, [location])

  return (
    <div className="App">
      <LayoutCtrl userObj={userObj}>
        <Route
          path="/"
          exact
          component={() => {
            if (userObj.id) {
              return <Home userObj={userObj} />
            }
            return <Login />
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
    </div>
  )
}

export default App
