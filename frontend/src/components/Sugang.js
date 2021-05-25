import React from 'react'
import { sharedTemplate, shareLectures } from './constants'
import './LectureTemplate.css'
import LectureTable from './LectureTable'
import { Button } from 'antd'

function Sugang() {
  const LectureRegister = (lecID) => {
    console.log(lecID)
    //Todo : lecID를 통해 서버에 수강신청 요청 보내기
  }

  const lectures = shareLectures

  const columns = [
    ...sharedTemplate,
    {
      title: '수강신청',
      dataIndex: 'Sugang',
      key: 'Sugang',
      width: '177px',
      align: 'center',
      render: (text, record) => (
        <Button onClick={() => LectureRegister(record.lecID)}>신청</Button>
      ),
    },
  ]

  return (
    <div className="LectureTemplate">
      <div className="list-title">중앙고등학교 전체 수업목록</div>
      <div className="content">
        <LectureTable columns={columns} lectures={lectures}></LectureTable>
      </div>
    </div>
  )
}

export default Sugang
