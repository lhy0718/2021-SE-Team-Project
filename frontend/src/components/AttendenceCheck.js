import React from 'react'
import { Table } from 'antd'
import AttendenceCheckBtns from './AttendenceCheckBtns'
import userProfileImage from './svg/profile-user.svg'
import { values } from 'lodash'

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
      <AttendenceCheckBtns
        uID={record.uID}
        lecID={record.lecID}
        lecNum={record.lecNum}
      />
    ),
  },
]

const AttendenceCheck = ({ studentsData, lecData, lecNum }) => {
  const studentsDataAndLecData = studentsData.map((elem) => ({
    ...elem,
    lecID: lecData.lecID,
    lecNum: lecNum,
  }))

  return (
    <div className="AttendenceCheck">
      <Table
        style={{ padding: '6px' }}
        columns={columns}
        dataSource={studentsDataAndLecData}
        bordered={true}
      />
    </div>
  )
}

export default AttendenceCheck
