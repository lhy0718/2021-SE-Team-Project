import React from 'react'
import { Button, Divider, Row, Table } from 'antd'
import AttendanceCheckBtns from './AttendanceCheckBtns'
import AttendanceCheckHeader from './AttendanceCheckHeader'
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
    dataIndex: 'attendanceCheckButtons',
    key: 'attendanceCheckButtons',
    align: 'center',
    render: (text, record) => (
      <AttendanceCheckBtns
        uID={record.uID}
        lecID={record.lecID}
        lecNum={record.lecNum}
      />
    ),
  },
]

const AttendanceCheck = ({ studentsData, lecData, lecNum }) => {
  const studentsDataAndLecData = studentsData.map((elem) => ({
    ...elem,
    lecID: lecData.lecID,
    lecNum: lecNum,
  }))

  return (
    <div className="AttendanceCheck">
      <AttendanceCheckHeader
        studentsData={studentsData}
        lecData={lecData}
        lecNum={lecNum}
      />
      <Row justify="end">
        <Button style={{ marginRight: '6px' }} danger type="primary">
          수업종료
        </Button>
      </Row>
      <Divider style={{ color: 'gray', margin: '0' }}>STUDENT LIST</Divider>
      <Table
        style={{ padding: '6px' }}
        columns={columns}
        dataSource={studentsDataAndLecData}
        bordered={true}
      />
    </div>
  )
}

export default AttendanceCheck
