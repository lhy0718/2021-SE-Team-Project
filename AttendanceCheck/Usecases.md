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
Req't| PW | UC1| UC2| UC3| UC4| UC5| UC6| UC7| 
:--: |:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
FR-1 |  6 |X|||||||
FR-2 |  4 ||X||X|X|||
FR-3 |  8 |||X|||||
FR-4 |  6 ||||X|X|X||
FR-5 |  2 |||X|||||
FR-6 |  2 |||X|||||
FR-7 |  4 ||||||X||
FR-8 |  10 |||||||X|
FR-9 |  3 |||||X||X|
Max PW|   |  6 |  4 |  8 |  6 |  6 |  6 |  10 |
Total PW| |  6 |  4 |  12 |  10 |  13 |  10 |  13 |

## Use Case Schema
Use Case UC-1 | InquireClassList |
:--:|:--|
Related Requirements| FR-1|
Initiating Actor| 교수자(사용자) |
Actor's Goal| 등록된 수업목록을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|1. 사용자가 로그인에 성공할시 '수업목록' 페이지로 이동한다. <br>2. 사용자의 인증정보를 바탕으로 DB에서 수업목록 데이터를 가져와 출력한다. <br>3. 수업목록이 출력되고 아래에 '수업 등록' , '수업 수정', 수업 삭제' 버튼이 존재한다.|
---
Use Case UC-2 | InquireEnrolledStudent |
:--:|:--|
Related Requirements| FR-2 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| 각 수업별로 해당 수업을 수강하는 학생 명단을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자는 '수업목록' 페이지에서 수업을 선택해야 한다.<br>- 해당 수업의 학생목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|1. 사용자가 '수업목록' 페이지에서 수업을 선택한다.<br>2. 사용자가 선택한 수업정보를 바탕으로 DB에서 학생목록 데이터를 가져와 출력한다.<br>3. 학생의 사진, 이름, 학번, 출석상태가 포함된 전체 학생목록을 출력한다.<br>4. 학생목록을 생성/수정/삭제 하고 출석상태를 변경할 수 있는 버튼이 존재한다.|
---
Use Case UC-4 | 	SearchStudent |
:--:|:--|
Related Requirements| FR-2, FR-4 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| 여러 학생 중에서 특정 학생을 이름으로 검색하여 정보를 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자는 '수업목록' 페이지에서 수업을 선택해야 한다.<br>- 해당 수업의 학생목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 검색할 이름을 입력할 수 있는 폼이 존재해야 한다.|
Postconditions| 검색조건을 만족하는 학생정보를 출력한다. |
Flow of Events for Main Success Senario|1. 사용자가 '수업목록' 페이지에서 수업을 선택한다.<br>2. 사용자로부터 검색할 학생의 이름을 입력받는다.<br>3. DB에서 입력받은 이름과 일치하는 학생정보 데이터를 가져와 출력한다.|
---
Use Case UC-7 | 	SendEmail |
:--:|:--|
Related Requirements| FR-8, FR-9 | 
Initiating Actor| 시스템 |
Actor's Goal| 사용자로부터 수업 종료를 전달받으면 출결정보를 학부모에게 이메일로 전송하기 위함 |
Participating Actors| User, Database |
Preconditions | - 사용자로부터 수업 종료를 전달받아야 한다.<br>- 학생들의 출석정보가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 학부모의 이메일이 데이터베이스에 정상적으로 등록되어 있어야 한다.
Postconditions | 전송이 완료되었음을 확인하는 메세지를 출력한다.|
Flow of Events for Main Success Senario|1. 사용자로부터 '수업종료'를 전달받는다.<br>2. 현재 수업을 수강하는 전체 학생의 학부모 Email 데이터를 DB에서 가져온다.<br>3. 각 학생의 출결정보를 학부모 Email로 전송한다.|
