import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentHome from './StudentHome'
import TeacherHome from './TeacherHome'

function parseWeekday(day) {
  let ret = ''
  if (day.weekday === 'MON') ret += '월'
  else if (day.weekday === 'TUE') ret += '화'
  else if (day.weekday === 'WED') ret += '수'
  else if (day.weekday === 'THU') ret += '목'
  else if (day.weekday === 'FRI') ret += '금'
  else if (day.weekday === 'SAT') ret += '토'
  else if (day.weekday === 'SUN') ret += '일'

  ret += day.period

  return ret
}

function Home({ userObj }) {
  const [lectures, setLectures] = useState([])

  const url = `/api/lectures/users/${userObj.id}`

  const headers = {
    accept: '*/*',
  }

  const params = {
    page: 1,
    pageSize: 50,
    order: 'ASC',
  }

  useEffect(() => {
    axios
      .get(url, { params: params, headers: headers })
      .then((res) => {
        const lectureData = res.data
        lectureData.map((lec) => {
          let Times = []
          lec.lectureTime.map((day) => {
            Times.push(parseWeekday(day))
          })

          lec.times = Times.join(',')
        })
        console.log(lectureData)
        setLectures(lectureData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return userObj.role === 'STUDENT' ? (
    <StudentHome userObj={userObj} lectures={lectures} />
  ) : (
    <TeacherHome
      userObj={userObj}
      lectures={lectures}
      setLectures={setLectures}
    />
  )
}

export default Home
