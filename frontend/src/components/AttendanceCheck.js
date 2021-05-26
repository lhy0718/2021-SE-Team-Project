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
        uId={record.uId}
        lectureId={record.lectureId}
        lectureHour={record.lectureHour}
      />
    ),
  },
]

const AttendanceCheck = ({ studentsData, lectureData, lectureHour }) => {
  const studentsDataAndLectureData = studentsData.map((elem) => ({
    ...elem,
    lectureId: lectureData.lectureId,
    lectureHour: lectureHour,
  }))

  return (
    <div className="AttendanceCheck">
      <AttendanceCheckHeader
        studentsData={studentsData}
        lectureData={lectureData}
        lectureHour={lectureHour}
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
        dataSource={studentsDataAndLectureData}
        bordered={true}
      />
    </div>
  )
}

export default AttendanceCheck
