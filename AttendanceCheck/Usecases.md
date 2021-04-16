# Use Cases

## Deriving Use Cases from System Requirements

| Actor  | Actor's Goal                               | Use Case Name    |
| ------ | ---------------------------------------------------- | ---------------- |
| 교수자 | 등록된(담당하고 있는) 수업 목록을 조회하기 위함  | InquireClassList (UC-1)  |
| 교수자 | 각 수업별로 해당 수업을 수강하는 학생 명단을 조회하기 위함  | InquireEnrolledStudent (UC-2)  |
| 교수자 | 학생의 출결 상태를 출석 상태로 변경하기 위함  | UC-2, CheckAttendance (UC-3)  |
| 교수자 | 학생의 출결 상태를 결석 상태로 변경하기 위함  | UC-2, UC-3  |
| 교수자 | 학생의 출결 상태를 지각 상태로 변경하기 위함  | UC-2, UC-3  |
| 교수자 | 여러 학생 중에서 특정 학생을 이름으로 검색하여 정보를 조회하기 위함 | SearchStudent (UC-4), UC-5  |
| 교수자 | 학생의 정보(개인정보, 출결현황 등)를 조회하기 위함 | InquireStudentInfo (UC-5)  |
| 교수자 | 학생에 대한 메모를 작성, 수정 ,삭제하기 위함  | StudentMemo (UC-6)|
| 시스템 | 사용자로부터 수업 종료를 전달받으면 출결정보를 학부모에게 이메일로 전송하기 위함 | SendEmail (UC-7) |
| 학부모 | 자녀의 출결 정보를 이메일로 전달받기 위함 | UC-7  |

## Use Case Diagram

## Traceability Matrix

## Use Case Schema
