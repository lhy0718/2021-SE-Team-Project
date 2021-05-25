import React from 'react'
import { Table } from 'antd'
import AttendenceCheckBtns from './AttendenceCheckBtns'
import userProfileImage from './svg/profile-user.svg'

const columns = [
  {
    title: '사진',
    dataIndex: 'image',
    key: 'image',
    align: 'center',
    render: () => (
      <img
        src={userProfileImage}
        className="userProfileImage"
        alt="User Profile"
        width="100px"
      />
    ),
  },
  {
    title: '번호',
    dataIndex: 'studentNum',
    key: 'studentNum',
  },
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '출석 체크',
    dataIndex: 'attendenceCheckButtons',
    key: 'attendenceCheckButtons',
    align: 'center',
    render: (text, record) => (
      <AttendenceCheckBtns uID={record.uID} lecID={2} lecNum={3} />
    ),
  },
]

const AttendenceCheck = ({ studentsData }) => {
  return (
    <div className="AttendenceCheck">
      <Table
        style={{ padding: '6px' }}
        columns={columns}
        dataSource={studentsData}
        bordered={true}
      />
    </div>
  )
}

export default AttendenceCheck
