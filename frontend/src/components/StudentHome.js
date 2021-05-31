import { ScheduleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import LectureTemplate from './LectureTemplate'
import { sharedTemplate, shareLectures } from './constants'

function StudentHome({ userObj, lectures }) {
  lectures = !!lectures ? lectures : shareLectures

  const columns = sharedTemplate

  return (
    <LectureTemplate
      columns={columns}
      lectures={lectures}
      type={userObj.role}
      name={userObj.fullName}
    ></LectureTemplate>
  )
}

export default StudentHome
