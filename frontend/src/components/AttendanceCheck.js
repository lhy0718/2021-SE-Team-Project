import React, { useState } from 'react'
import { Button, Divider, Row, Table, Popconfirm } from 'antd'
import AttendanceCheckBtns from './AttendanceCheckBtns'
import AttendanceCheckHeader from './AttendanceCheckHeader'
import userProfileImage from './svg/profile-user.svg'

const AttendanceCheck = ({ studentsData, lectureData, lectureHour }) => {
  const [_studentsData, setStudentsData] = useState(studentsData)

  const onAttendanceStateChanges = ({ uId, newAttendanceState }) => {
    let newStudentsData = [..._studentsData]
    newStudentsData[
      newStudentsData.findIndex((data) => data.uId === uId)
    ].attendanceState = newAttendanceState
    setStudentsData(newStudentsData)
  }

  const onExitAttendance = () => {
    console.log('Exit Attendance')
  }

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
          lectureId={lectureData.lectureId}
          lectureHour={lectureHour}
          attendanceState={record.attendanceState}
          onAttendanceStateChange={onAttendanceStateChanges}
        />
      ),
    },
  ]

  return (
    <div
      className="AttendanceCheck"
      style={{ paddingRight: '48px', paddingLeft: '48px' }}
    >
      <AttendanceCheckHeader
        studentsData={_studentsData}
        lectureData={lectureData}
        lectureHour={lectureHour}
      />
      <Row justify="end">
        <Popconfirm
          title={'수업을 종료하시겠습니까?'}
          onConfirm={() => onExitAttendance()}
          okText="네"
          cancelText="아니요"
        >
          <Button danger type="primary">
            수업종료
          </Button>
        </Popconfirm>
      </Row>
      <Divider style={{ color: 'gray', margin: '0' }}>STUDENT LIST</Divider>
      <Table columns={columns} dataSource={_studentsData} bordered={true} />
    </div>
  )
}

export default AttendanceCheck
