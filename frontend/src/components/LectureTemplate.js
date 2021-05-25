import React from 'react'
import './LectureTemplate.css'
import LectureTable from './LectureTable'

const LectureTemplate = ({ columns, lectures, type, name }) => {
  return type === 'T' ? (
    <div className="LectureTemplate">
      <div className="list-title">
        {name} 선생님의 수업 <button className="addLecture">수업추가</button>
      </div>
      <div className="content">
        <LectureTable
          columns={columns}
          lectures={lectures}
          type={type}
        ></LectureTable>
      </div>
    </div>
  ) : (
    <div className="LectureTemplate">
      <div className="list-title">{name} 학생의 수업</div>
      <div className="content">
        <LectureTable
          columns={columns}
          lectures={lectures}
          type={type}
        ></LectureTable>
      </div>
    </div>
  )
}

export default LectureTemplate
