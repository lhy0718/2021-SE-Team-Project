import React from 'react'
import { Button, Row, Col } from 'antd'
import './AttendanceCheckBtns.css'

const AttendanceCheckBtns = ({
  uId,
  lectureId,
  lectureHour,
  attendanceState,
}) => {
  const onClickAttendance = () => {
    console.log({ uId, lectureId, lectureHour, attendanceType: 'attendance' })
  }

  const onClickAbsent = () => {
    console.log({ uId, lectureId, lectureHour, attendanceType: 'absent' })
  }

  const onClickTardy = () => {
    console.log({ uId, lectureId, lectureHour, attendanceType: 'tardy' })
  }

  const onClickEtc = () => {
    console.log({ uId, lectureId, lectureHour, attendanceType: 'etc' })
  }

  return (
    <div className="AttendanceCheckBtns">
      <Row align="center">
        <Col>
          <Button
            id="attendanceBtn"
            htmlType="button"
            onClick={onClickAttendance}
          >
            출석
          </Button>
        </Col>
        <Col>
          <Button id="absentBtn" htmlType="button" onClick={onClickAbsent}>
            결석
          </Button>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <Button id="tardyBtn" htmlType="button" onClick={onClickTardy}>
            지각
          </Button>
        </Col>
        <Col>
          <Button id="etcBtn" htmlType="button" onClick={onClickEtc}>
            기타
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AttendanceCheckBtns
