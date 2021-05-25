import { ScheduleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import LectureTemplate from './LectureTemplate'
import { sharedTemplate, shareLectures } from './constants'

function StudentHome({ userObj }) {
  const lectures = shareLectures

  const columns = [
    ...sharedTemplate,
    {
      title: '출결현황 조회',
      dataIndex: 'myAtd',
      key: 'myAtd',
      width: '180px',
      align: 'center',
      render: () => <ScheduleOutlined style={{ cursor: 'pointer' }} />,
    },
  ]

  return (
    <LectureTemplate
      columns={columns}
      lectures={lectures}
      type={userObj.type}
      name={userObj.name}
    ></LectureTemplate>
  )
}

export default StudentHome
