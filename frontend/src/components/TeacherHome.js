import React, { useState } from 'react'
import LectureTemplate from './LectureTemplate'
import { sharedTemplate, shareLectures } from './constants'

function TeacherHome({ userObj }) {
  const lectures = shareLectures

  const columns = [
    ...sharedTemplate,
    {
      title: '출석체크',
      dataIndex: 'AtdCheck',
      key: 'AtdCheck',
      width: '180px',
      align: 'center',
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
