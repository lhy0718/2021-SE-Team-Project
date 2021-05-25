import React from 'react'
import studentImage from './svg/student.svg'
import teacherImage from './svg/teacher.svg'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'

const ImageLayout = {
  marginTop: '50px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
}

const Image = {
  padding: '20px',
}

function SelectSignup() {
  return (
    <div style={ImageLayout}>
      <div>
        <Link to="/signup/student">
          <img src={studentImage} alt="User Login" width={500} style={Image} />
          <Typography.Title>STUDENT</Typography.Title>
        </Link>
      </div>
      <div>
        <Link to="/signup/teacher">
          <img src={teacherImage} alt="User Login" width={500} style={Image} />
          <Typography.Title>TEACHER</Typography.Title>
        </Link>
      </div>
    </div>
  )
}

export default SelectSignup
