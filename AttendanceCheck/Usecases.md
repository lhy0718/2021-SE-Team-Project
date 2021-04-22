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
![usecase_diagram](https://user-images.githubusercontent.com/76427521/115723412-e966b900-a3ba-11eb-8252-816e22ff45b5.JPG)
## Traceability Matrix
Req't| PW | UC1| UC2| UC3| UC4| UC5| UC6| UC7| 
:--: |:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
FR-1 |  6 |X|||||||
FR-2 |  4 ||X||X|X|X||
FR-3 |  8 |||X|||||
FR-4 |  6 ||||X|X|X||
FR-5 |  2 |||X|||||
FR-6 |  2 |||X|||||
FR-7 |  4 ||||||X||
FR-8 |  10 |||||||X|
FR-9 |  3 |||||X|X|X|
Max PW|   |  6 |  4 |  8 |  6 |  6 |  6 |  10 |
Total PW| |  6 |  4 |  12 |  10 |  13 |  17 |  13 |

## Use Case Schema
Use Case UC-1 | InquireClassList |
:--:|:--|
Related Requirements| FR-1|
Initiating Actor| 교수자(사용자) |
Actor's Goal| 등록된 수업목록을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자의 수업목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|<- 1. 사용자가 로그인에 성공할시 ``수업목록(UC-1)`` 페이지로 이동한다. <br><- 2. 사용자의 인증정보를 바탕으로 DB에서 수업목록 데이터를 가져와 출력한다. <br><- 3. 수업목록이 출력되고 아래에 ``수업 등록 , 수업 수정, 수업 삭제`` 버튼이 존재한다.<br>-> 4. 사용자가 수업을 클릭한다.<br><- 5. 해당 수업에 대한 ``학생목록(UC-2)`` 페이지로 이동한다.|
---
Use Case UC-2 | InquireEnrolledStudent |
:--:|:--|
Related Requirements| FR-2 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| 각 수업별로 해당 수업을 수강하는 학생 명단을 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자는 '수업목록' 페이지에서 수업을 선택해야 한다.<br>- 해당 수업의 학생목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|-> 1. 사용자가 '수업목록' 페이지에서 수업을 선택한다.<br><- 2. 사용자가 선택한 수업정보를 바탕으로 DB에서 해당 수업의 학생목록 데이터를 가져온다.<br><- 3. 학생의 ``사진, 이름, 학번, 출석상태`` 등이 포함된 전체 학생목록을 출력한다.<br><- 4. 학생목록을 ``생성/수정/삭제`` 하고 출석상태를 변경할 수 있는 버튼이 존재한다.|
---
Use Case UC-3 | CheckAttendance |
:--:|:--|
Related Requirements| FR-3, FR-5, FR-6 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| - 학생들의 출결을 학생별로 '출석', '결석', '지각', '기타'로 각각 체크하기 위함<br>- 수업 종료 후, 출결 현황을 최종 저장하여 학생들의 출결관리를 용이하게 하기 위함 |
Participating Actors| Database |
Preconditions | - 학생 명단은 테이블의 형식으로 화면에 출력하여 식별이 쉽도록 한다.<br>- 각 수업이 시작되기 전, 학생들의 출결 상태는 default로 초기화한다.<br>- 각 출결 상태를 체크하는 것은 토글을 단순히 클릭함으로써 가능하도록 한다.<br>- 출결 상태는 실시간으로 저장한다. <br>- 수업 종료전(이메일 발송(UC-7)전에는 언제든지 출결 상태를 변경할 수 있어야 한다.<br>- '수업 종료' 버튼이 있어서 수업 종료를 교수자(사용자)가 승인할 수 있어야 한다.|
Postconditions| 출결 결과를 Database에 최종 저장 |
Flow of Events for Main Success Senario|→ 1. Include:: InquireClassList(UC-1) // 교수자가 본인이 맡은 수업 목록 중 출결체크 할 수업을 선택한다.<br>← 2. Include:: InquireEnrolledStudent(UC-2) // 화면에 해당 수업을 듣는 학생 명단과 그 옆에 출석/결석/지각/기타를 체크할 수 있도록 보여준다.<br>→ 3. 교수자가 학생별로 학생들의 출결 현황에 따라 출석 체크를 진행한다.<br>← 4. 출결 현황을 실시간으로 저장한다.<br>→ 5. 수업이 종료되면 교수자는 ‘수업종료’ 버튼을 누른다.<br>← 6. 교수자는 본인이 맡은 수업 목록이 있는 창으로 다시 나오게 된다.|
---
Use Case UC-4 | 	SearchStudent |
:--:|:--|
Related Requirements| FR-2, FR-4 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| 여러 학생 중에서 특정 학생을 이름으로 검색하여 정보를 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 사용자는 정상적으로 로그인이 완료되어 있어야 한다.<br>- 사용자는 '수업목록' 페이지에서 수업을 선택해야 한다.<br>- 해당 수업의 학생목록 데이터가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 검색할 이름을 입력할 수 있는 폼이 존재해야 한다.|
Postconditions| 검색조건을 만족하는 학생정보를 출력한다. |
Flow of Events for Main Success Senario|-> 1. 사용자가 '수업목록' 페이지에서 수업을 선택한다.<br>-> 2. 사용자로부터 검색할 학생의 이름을 입력받는다.<br><- 3.  DB에서 입력받은 이름과 일치하는 학생정보 데이터만을 `학생목록`으로 출력한다.|
---
Use Case UC-5 | 	InquireStudentInfo |
:--:|:--|
Related Requirements| FR-2, FR-4, FR-9 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| -	사용자가 학생에 대한 정보(이름, 학부모 이메일, 출결 현황 등)를 조회하기 위함 |
Participating Actors| Database |
Preconditions | - 학생에 대한 정보가 사전에 Database에 등록되어 있어야 한다.<br>- 학생정보는 개인정보에 해당하므로 조회 시에 계정 비밀번호를 이용하여 인증을 한번 더 거친다.<br>- 정보를 수정할 수 있도록 테이블의 오른쪽 상단에 `수정` 버튼이 있어야 한다.|
Postconditions| 없음 |
Flow of Events for Main Success Senario|→ 1. Include:: SearchStudent(UC-4) // 교수자가 정보 조회할 학생의 이름을 입력한다.<br>→ 2. 사용자 인증을 요구하는 창에 계정 비밀번호를 입력하여 인증을 거친다. <br>← 3. 검색한 이름에 해당하는 학생의 정보를 테이블 형식으로 출력한다.<br>→ 4. 학생 정보를 수정하고 싶을 경우, `수정` 버튼을 클릭한다. <br>← 5. Database에 변경된 사항을 저장한다.|
---
Use Case UC-6 | 	StudentMemo |
:--:|:--|
Related Requirements| FR-2, FR-4, FR-7, FR-9 | 
Initiating Actor| 교수자(사용자) |
Actor's Goal| - 학생에 대한 메모를 생성하기 위함<br>- 과거에 작성했던 학생에 대한 메모를 삭제하거나 수정하여 저장하기 위함<br>- 출석 체크를 할 때 사용되는 학생 명단 테이블과 학생 조회를 통해 조회한 학생정보에서 각 학생에 대한 메모를 조회하기 위함 |
Participating Actors| Database |
Preconditions | -	학생 조회(SearchStudent(UC-4))를 통해 학생을 조회했을 때, ‘메모’ 버튼이 있어야 한다.<br>- `메모`클릭 시 메모 작성을 위한 텍스트 편집기가 팝업 되어야 한다.|
Postconditions| 사용자가 작성한 메모가 최근 상태로 DB에 저장 또는 삭제 |
Flow of Events for Main Success Senario|→ Include::InquireStudentInfo(UC-5) // 1. 교수자가 학생이름을 통하여 메모를 추가할 학생을 검색<br>→ 2. 사용자 재인증(개인정보를 조회하는 상황이므로)<br>← 3. 학생 이름과 동일한 학생정보를 불러와서 출력, 마지막 칸에 ‘메모’버튼<br>→ 4. 교수자가 ‘메모’버튼 클릭<br> ← 5. 텍스트 편집기 팝업<br>→ 6-a. 내용을 작성 또는 수정한 후 ‘저장’버튼 클릭<br>← 7. DB에 변경 내용을 저장<br><br>→ 6-b. ‘삭제’버튼 클릭<br>← 7. DB에서 해당 내용 삭제|
---
Use Case UC-7 | 	SendEmail |
:--:|:--|
Related Requirements| FR-8, FR-9 | 
Initiating Actor| 시스템 |
Actor's Goal| 사용자로부터 수업 종료를 전달받으면 출결정보를 학부모에게 이메일로 전송하기 위함 |
Participating Actors| User, Database |
Preconditions | - 사용자로부터 수업 종료를 전달받아야 한다.<br>- 학생들의 출석정보가 데이터베이스에 정상적으로 등록되어 있어야 한다.<br>- 학부모의 이메일이 데이터베이스에 정상적으로 등록되어 있어야 한다.
Postconditions | - 수업이 종료되고 출결정보 전송이 완료되었음을 확인하는 메세지를 출력한다.|
Flow of Events for Main Success Senario|-> 1. 사용자로부터 ``수업종료``를 전달받는다.<br><- 2. 현재 수업을 수강하는 전체 학생의 학부모 Email 데이터를 DB에서 가져온다.<br><- 3. 각 학생의 출결정보를 학부모 Email로 전송한다.<br><- 6. 교수자는 팝업창을 통해 “수업이 종료되었습니다. (출석:a명/결석:b명/지각:c명/기타:d명)”을 확인하게 된다.|
