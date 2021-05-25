import React from 'react'
import { Button, Row, Col } from 'antd'
import './AttendenceCheckBtns.css'

const AttendenceCheckBtns = ({ uID, lecID, lecNum }) => {
  const onClickAttendence = () => {
    console.log({ uID, lecID, lecNum, attendenceType: 'attendence' })
  }

  const onClickAbsent = () => {
    console.log({ uID, lecID, lecNum, attendenceType: 'absent' })
  }

  const onClickTardy = () => {
    console.log({ uID, lecID, lecNum, attendenceType: 'Tardy' })
  }

  const onClickEtc = () => {
    console.log({ uID, lecID, lecNum, attendenceType: 'etc' })
  }

  return (
    <div className="AttendenceCheckBtns">
      <Row align="center">
        <Col>
          <Button htmlType="button" onClick={onClickAttendence}>
            출석
          </Button>
        </Col>
        <Col>
          <Button htmlType="button" onClick={onClickAbsent}>
            결석
          </Button>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <Button htmlType="button" onClick={onClickTardy}>
            지각
          </Button>
        </Col>
        <Col>
          <Button htmlType="button" onClick={onClickEtc}>
            기타
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default AttendenceCheckBtns
