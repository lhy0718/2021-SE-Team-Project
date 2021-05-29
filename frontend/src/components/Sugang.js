import React from 'react'
import { sharedTemplate, shareLectures } from './constants'
import './LectureTemplate.css'
import LectureTable from './LectureTable'
import { Button, Popconfirm } from 'antd'

function Sugang() {
  const lectures = shareLectures

  function confirm(lectureId) {
    console.log(lectureId)
    //Todo : lecID를 통해 서버에 수강신청 요청 보내기
  }

  const columns = [
    ...sharedTemplate,
    {
      title: '수강신청',
      dataIndex: 'Sugang',
      key: 'Sugang',
      width: '177px',
      align: 'center',
      render: (text, record) => (
        <Popconfirm
          title={`${record.lectureName}(${record.teacherName}) 신청하시겠습니까?`}
          onConfirm={() => confirm(record.lectureId)}
          okText="네"
          cancelText="아니요"
        >
          <Button type="primary" danger="true">
            신청
          </Button>
        </Popconfirm>
      ),
    },
  ]

  return (
    <div className="LectureTemplate">
      <div className="list-title">
        <div className="title">중앙고등학교 전체 수업목록</div>
      </div>
      <div className="content">
        <LectureTable columns={columns} lectures={lectures}></LectureTable>
      </div>
    </div>
  )
}

export default Sugang
