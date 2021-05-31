import React from 'react'
import { Button, Row, Col } from 'antd'
import './AttendanceCheckBtns.css'

const AttendanceCheckBtns = ({
  uId,
  lectureCode,
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
            className="attendanceBtn"
            htmlType="button"
            onClick={onClickAttendance}
            active={attendanceState === 'attendance' ? 'active' : undefined}
          >
            출석
          </Button>
        </Col>
        <Col>
          <Button
            className="absentBtn"
            htmlType="button"
            onClick={onClickAbsent}
            active={attendanceState === 'absent' ? 'active' : undefined}
          >
            결석
          </Button>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <Button
            className="tardyBtn"
            htmlType="button"
            onClick={onClickTardy}
            active={attendanceState === 'tardy' ? 'active' : undefined}
          >
            지각
          </Button>
        </Col>
        <Col>
          <Button
            className="etcBtn"
            htmlType="button"
            onClick={onClickEtc}
            active={attendanceState === 'etc' ? 'active' : undefined}
          >
            기타
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AttendanceCheckBtns
