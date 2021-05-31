import React, { useState, useEffect } from 'react'
import { sharedTemplate, shareLectures } from './constants'
import './LectureTemplate.css'
import LectureTable from './LectureTable'
import { Button, Popconfirm } from 'antd'
import axios from 'axios'

function Sugang() {
  const [lectures, setLectures] = useState([])

  useEffect(() => {
    const url = `/api/lectures`

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      accept: 'application/json',
    }

    const params = {
      page: 1,
      pageSize: 50,
      order: 'ASC',
    }

    axios
      .get(url, {
        params: params,
        haeders: headers,
      })
      .then((res) => {
        console.log(res)
        setLectures(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  function confirm(lectureCode) {
    console.log(lectureCode)
    axios
      .patch(`/api/lectures/${lectureCode}`, {
        lectureId: parseInt(lectureCode),
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
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
          onConfirm={() => confirm(record.lectureCode)}
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
