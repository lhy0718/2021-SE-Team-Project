import React from 'react'
import { Button, Row, Col } from 'antd'
import './AttendanceCheckBtns.css'

const AttendanceCheckBtns = ({ uID, lecID, lecNum, attendanceState }) => {
  const onClickAttendance = () => {
    console.log({ uID, lecID, lecNum, attendanceType: 'attendance' })
  }

  const onClickAbsent = () => {
    console.log({ uID, lecID, lecNum, attendanceType: 'absent' })
  }

  const onClickTardy = () => {
    console.log({ uID, lecID, lecNum, attendanceType: 'Tardy' })
  }

  const onClickEtc = () => {
    console.log({ uID, lecID, lecNum, attendanceType: 'etc' })
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
