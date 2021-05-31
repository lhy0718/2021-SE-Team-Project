import React, { useState } from 'react'
import LectureTemplate from './LectureTemplate'
import { sharedTemplate, shareLectures } from './constants'
import SelectClassNumberPopup from './SelectClassNumberPopup'

function TeacherHome({ userObj, lectures }) {
  lectures = !!lectures ? lectures : shareLectures

  const columns = [
    ...sharedTemplate,
    {
      title: '출석체크',
      dataIndex: 'AtdCheck',
      key: 'AtdCheck',
      width: '177px',
      align: 'center',
      render: (text, record) => (
        <SelectClassNumberPopup lectureID={record.lectureID} />
      ),
    },
  ]

  return (
    <LectureTemplate
      columns={columns}
      lectures={lectures}
      type={userObj.role}
      name={userObj.fullName}
    />
  )
}

export default TeacherHome
