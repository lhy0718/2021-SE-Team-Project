import React from 'react'
import { Button, Row, Col } from 'antd'
import './AttendanceCheckBtns.css'

const AttendanceCheckBtns = ({
  uId,
  lectureId,
  lectureHour,
  attendanceState,
  onAttendanceStateChange,
}) => {
  const onClickAttendance = () => {
    onAttendanceStateChange({ uId: uId, newAttendanceState: 'attendance' })
  }

  const onClickAbsent = () => {
    onAttendanceStateChange({ uId: uId, newAttendanceState: 'absent' })
  }

  const onClickTardy = () => {
    onAttendanceStateChange({ uId: uId, newAttendanceState: 'tardy' })
  }

  const onClickEtc = () => {
    onAttendanceStateChange({ uId: uId, newAttendanceState: 'etc' })
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
