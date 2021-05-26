import React, { useState } from 'react'
import LectureTemplate from './LectureTemplate'
import { sharedTemplate, shareLectures } from './constants'
import SelectClassNumberPopup from './SelectClassNumberPopup'

function TeacherHome({ userObj }) {
  const lectures = shareLectures

  const columns = [
    ...sharedTemplate,
    {
      title: '출석체크',
      dataIndex: 'AttendanceCheck',
      key: 'AttendanceCheck',
      width: '177px',
      align: 'center',
      render: (text, record) => (
        <SelectClassNumberPopup lectureId={record.lectureId} />
      ),
    },
  ]

  return (
    <LectureTemplate
      columns={columns}
      lectures={lectures}
      type={userObj.type}
      name={userObj.name}
    />
  )
}

export default TeacherHome
