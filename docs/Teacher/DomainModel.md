# Teacher Domain Model

## UC-1(InquireClassList)

### Extracting the Responsibilities

| Responsibility Description | Type | Concept Name  |
| - | - | - |
| UC-1과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)    |
| 교수자에게 등록된(담당하고 있는) 수업목록 | K    | 수업목록 |
| User가 수업목록을 요청한다. | D | 수업목록요청 |
| GUI를 통해 현재의 상태를 화면에 표현한다                                 | D    | 	View Library(Page Maker) |
| 사용자에게 화면을 보여주는 역할                              | K    | 	User interface          |

### Extracting the Associations

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> View Library   | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 수업목록요청 <->Controller    | 수업목록요청을 Controller에게 전달한다                       | 요청 전달    |
| Controller<-> DB Connection    | 저장한 user 데이터를 전달한다                                | 요청/응답      |
| 수업목록 <-> DB Connection    | user에게 등록된 수업목록을 제공한다.                           | 제공      |

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 어떤 요청이 들어왔을 때 로그인이 되어있는지 확인한다. |
| 수업 목록  | 수업 이름, 수업 요일, 수업 시간 , 수강 인원 등  | 각 수업과 관련된 세부적인 정보           |

![UC-1](https://user-images.githubusercontent.com/76427521/115992121-fd9ef600-a606-11eb-88d4-eeff64afc0c9.PNG)


## UC-2 : AddClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-2과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 정보를 입력한다. | D | 수업생성 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
GUI를 통해 현재의 상태를 화면에 표현한다 | D    | View Library(Page Maker)
사용자에게 화면을 보여주는 역할 | K    | User interface

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> DB Connection|	Controller는 DB Connection으로 request를 넘긴다.| 요청 전달
수업생성 요청 <-> Controller|	수업생성 요청을 Controller에게 전달한다.|	요청 전달
Controller <-> ViewLibrary|	Controller는 View Library에게 요청을 보내고 게시할 내용을 전달한다.| 요청 전달
Page Maker <-> User Interface| 게시할 내용을 전달받고 뷰를 그린다.	|출력



### Extracting Attributes
Concept|Attributes|Attributes Description
-|-|-
수업정보|	수업 정보 record|	사용자가 입력한 수업 정보(수업명, 학년, 반번호)

![final_1](https://user-images.githubusercontent.com/64057843/115997099-ce937f00-a61c-11eb-8a0d-772d2be487e4.png)


## UC-3 : UpdateClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-3과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 정보를 입력한다. | D | 수업수정 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
GUI를 통해 현재의 상태를 화면에 표현한다 | D    | View Library(Page Maker)
사용자에게 화면을 보여주는 역할 | K    | User interface

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> DB Connection|	Controller는 DB Connection으로 request를 넘긴다.| 요청 전달
Controller <-> Page Maker|	Controller는 Page Maker에게 요청을 보내고 UI를 받는다.| 요청 전달
Controller <-> ViewLibrary|	Controller는 View Library에게 요청을 보내고 게시할 내용을 전달한다.| 요청 전달
Page Maker <-> User Interface| 게시할 내용을 전달받고 뷰를 그린다.	|출력

### Extracting Attributes
Concept|Attributes|Attributes Description
-|-|-
수업정보|	수업 정보 record|	사용자가 입력한 수업 정보(수업명, 학년, 반번호)

![final_2](https://user-images.githubusercontent.com/64057843/115997102-cfc4ac00-a61c-11eb-97a6-d580a1e9f0d2.png)


## UC-4 : RemoveClass

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-4과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 수업 삭제버튼을 클릭한다. | D | 수업삭제 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
GUI를 통해 현재의 상태를 화면에 표현한다 | D    | View Library(Page Maker)
사용자에게 화면을 보여주는 역할 | K    | User interface
삭제 성공 여부를 확인한다.|	D|	Valid Checker
삭제 성공여부를 알리는 팝업창을 보인다.	|D|	Pop-up Maker

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> ViewLibrary|	Controller는 View Library에게 요청을 보내고 게시할 내용을 전달한다.| 요청 전달
Page Maker <-> User Interface| 게시할 내용을 전달받고 뷰를 그린다.	|출력
Controller<->DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|요청전달
수업삭제 요청 <-> Controller|	수업 삭제 요청을 Controller에게 전달한다.|	요청 전달
Valid Checker<-> DB connection|	DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker애 넘겨준다.|	유효 여부 전달
Valid Checker<-> Pop-up Maker|	Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다.|생성

### Extracting Attributes
Concept | Attributes | Attributes Description
-|-|-
수업 삭제 요청 | 삭제 요청 | 수업삭제 요청 정보(수업명)

![final_3](https://user-images.githubusercontent.com/64057843/115997103-d05d4280-a61c-11eb-9329-75cd654d8f66.png)


### UC-5(InquireEnrolledStudent)

### Extracting the Responsibilities**

| Responsibility Description | Type | Concept Name  |
| - | - | - |
| UC-5과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)    |
| 해당 수업에 등록된 학생목록 | K    | 학생목록 |
| User가 학생목록을 요청한다. | D | 학생목록요청 |
| GUI를 통해 현재의 상태를 화면에 표현한다                                 | D    | 	View Library(Page Maker) |
| 사용자에게 화면을 보여주는 역할                              | K    | 	User interface          |

### Extracting the Associations

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> View Library   | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 학생목록요청 <->Controller    | 학생목록요청을 Controller에게 전달한다                       | 요청 전달    |
| Controller<-> DB Connection    | 저장한 user 데이터를 전달한다                                | 요청/응답      |
| 학생목록 <-> DB Connection    | 해당 수업의 학생목록을 제공한다.                           | 제공      |

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| 학생목록요청 | 수업 정보 | 현재 선택된 수업 정보 |
| 학생 목록  | 학생 사진, 이름, 학번, 출석상태 등  | 학생 정보와 관련된 세부사항           |

![UC-5](https://user-images.githubusercontent.com/76427521/115997443-11098b80-a61e-11eb-9201-41dc28b69219.PNG)


## UC-6(CheckAttendance)

### Extracting the Responsibilities

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :---: | ------------- |
| UC-6과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|GUI를 통해 현재의 상태를 화면에 표현한다.|D|View Library(Page Maker)|
|서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다.|D| 	DB Connection(DAO+DB)|
|사용자에게 화면을 보여주는 역할|K|User Interface|
|사용자가 출석, 결석, 지각, 공결 중에서 선택하여 체크할 수 있는 체크박스|K|Check Box|
|출결체크의 변화를 감지하여 변화여부를 전달한다.|D|Change Checker|
|DB에서 받아온 출결 데이터|K|출결 데이터|

### Extracting the Associations

| Concept pair | Association Description  | Association Name |
| - | - | - |
|Controller <-> View Library|Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다.|응답|
|View Library <-> User interface|게시할 내용을 전달받고 뷰를 그린다.|뷰를 그림|
|Check Box <-> Controller|체크박스에 표시된 사항(출결 내용)을 Controller에 전달한다.|요청 전달|
|Change Checker <-> Check Box|Check Box의 상태가 변화하면 변화여부를 전달한다.|변화여부 전달|
|Change Checker <-> Controller|변화되었음이 감지되면 Controller에게 저장을 요청한다.|요청 전달|
|Controller <-> DB Connection|출결 내용을 전달한다.|전달|
|DB Connection <-> 출결 데이터|변화된 출결정보를 제공해준다.|제공|
|DB Connection <-> Controller|변경되어 저장된 출결정보를 제공해준다.|제공|

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|Check Box|출결 체크를 할 수 있는 Check Box|출석, 결석, 지각, 공결|

![teacher uc-6](https://user-images.githubusercontent.com/79308015/115994116-a1d96a80-a610-11eb-8a4c-03073d5fb0c5.jpg)



## UC-7(SearchStudents)

### Extracting the Responsibilities

| Responsibility Description | Type | Concept Name  |
| -- | - | -|
| UC-7과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)    |
| 요청한 학생에 대한 학생정보(출결정보, 별점 등) | K    | 학생목록 |
| User가 학생검색을 요청한다. | D | 학생검색 요청 |
| GUI를 통해 현재의 상태를 화면에 표현한다                                 | D    | 	View Library(Page Maker) |
| 사용자에게 화면을 보여주는 역할                              | K    | 	User interface          |

### Extracting the Associations

| Concept pair  | Association Description   | Association Name |
| -| - | - |
| Controller <-> View Library   | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 학생검색요청 <->Controller    | 학생검색요청을 Controller에게 전달한다                       | 요청 전달    |
| Controller<-> DB Connection    | 저장한 user 데이터를 전달한다                                | 요청/응답      |
| 학생정보 <-> DB Connection    | 검색요청한 학생에 대한 학생정보                        | 제공      |

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 사용자 정보 | 현재 인증된 로그인 정보 |
| 학생정보 | 검색요건과 일치하는 학생정보 목록 | 검색된 학생의 정보 |
| 학생검색 요청  | 검색정보  | 검색하고자 하는 학생에 대한 학생정보(이름)    |

![UC-7](https://user-images.githubusercontent.com/76427521/115992126-01327d00-a607-11eb-95e7-e83b00f8b602.PNG)


## UC-8(StudentInfo)

### Extracting the Responsibilities

| Responsibility Description  | Type | Concept Name  |
| - | - | - |
|UC-8과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|GUI를 통해 현재의 상태를 화면에 표현한다.|D|View Library(Page Maker)|
|서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다.|D| 	DB Connection(DAO+DB)|
|사용자에게 화면을 보여주는 역할|K|User Interface|
|원하는 조건에 따른 학생정보를 검색하기 위해 검색 조건을 Controller에게 전달한다.|D|학생 검색|
|학생에 대한 상세 정보|K|학생정보|



### Extracting the Associations

| Concept pair | Association Description | Association Name |
| - | - | - |
|Controller <-> View Library|Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다.|응답|
|View Library <-> User interface|게시할 내용을 전달받고 뷰를 그린다.|뷰를 그림|
|학생 검색 <-> Controller|학생 검색에 대한 요청과 검색 조건을 전달한다.|요청 전달|
|학생정보 요청 <-> Controller|학생정보를 Controller에 요청한다.|요청 전달|
|DB Connection <-> 학생정보|요청받은 학생정보를 제공해준다.|제공|
|Controller <-> DB Connection|학생을 검색하기 위해 전달 받은 내용을 전달한다.|전달|
|DB Connection <-> Controller|변경되어 저장된 학생정보를 제공해준다.|제공|

### Extracting Attributes

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|학생정보|학생에 대한 상세 정보(개인 정보)|사진, 이름, 학번 email 등|

![teacher uc-8](https://user-images.githubusercontent.com/79308015/115994124-a6058800-a610-11eb-8a33-7b4d3b6f2900.jpg)

## UC-9 (StudentPoint)

### Extracting the Responsibilities

Responsibility Description | Type | Concept Name
-|-|-
UC-9와 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller
로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업의 학생목록을 요청한다. | D | DB Connection(DAO+DB)
GUI를 통해 현재의 상태를 화면에 표현한다. | D | View Library(Page Maker)
개별 학생에게 별점을 부과하는 요청 | K | 별점 부과 요청
사용자에게 화면을 보여주는 역할을 한다. | K | User interface
교수자가 담당하는 수업의 학생 목록 | K | 학생 목록

### Extracting the Associations

Concept pair | Association Description | Association Name
:-:|-|-
Controller <-> View Library | Controller는 View Library에 요청을 보내고, 게시할 내용을 전달한다. | 응답
View Library <-> User interface | 게시할 내용을 전달받고 뷰를 그린다. | 뷰를 그림
DB Connection <-> Controller | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답
Controller <-> 별점 부과 요청 | 학생 목록에서 선택한 학생에 대해 별점을 부과할지 물어보고 요청을 받는다. | 요청 전달
학생 목록 <-> DB Connection | 학생 목록을 DAO에 요청하고 제공받는다. | 제공

### Extracting Attributes

Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
별점 부과 요청 | 요청 폼 | 수업의 id, 학생의 id, 부과할 별점을 포함하는 폼 데이터

![uc-9](https://user-images.githubusercontent.com/11364584/115998090-9f7f0c80-a620-11eb-8cf8-4cd76a228526.jpeg)

## UC-10 (ClassNotice)

### Extracting the Responsibilities

Responsibility Description | Type | Concept Name
-|-|-
UC-10과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller
로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업의 학생목록을 요청한다. | D | DB Connection(DAO+DB)
GUI를 통해 현재의 상태를 화면에 표현한다. | D | View Library(Page Maker)
공지를 학생들에게 전달하는 요청 | K | 공지 전달 요청
사용자에게 화면을 보여주는 역할을 한다. | K | User interface
교수자가 담당하는 수업 목록 | K | 담당 수업 목록

### Extracting the Associations

Concept pair | Association Description | Association Name
-|-|-
Controller <-> View Library | Controller는 View Library에 요청을 보내고, 게시할 내용을 전달한다. | 응답
View Library <-> User interface | 게시할 내용을 전달받고 뷰를 그린다. | 뷰를 그림
DB Connection <-> Controller | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답
Controller <-> 공지 전달 요청 | 학생들에게 전달할 공지의 제목과 내용을 물어보고 요청을 받는다. | 요청 전달
담당 수업 목록 <-> DAO | 교수자의 담당 수업 목록을 DAO에 요청하고 제공받는다. | 제공

### Extracting Attributes

Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
공지 전달 요청 | 요청 폼 | 수업의 id, 공지 제목, 공지 내용을 포함하는 폼 데이터

![uc-10](https://user-images.githubusercontent.com/11364584/115998095-a4dc5700-a620-11eb-8688-e5e15810e0d2.jpeg)

## UC-11 (RejectStudent)

### Extracting the Responsibilities

Responsibility Description|Type|Concept Name
-|-|-
UC-11과 연관된 개념들과 행동들을 조정하고 다른 개념에 작업을 위임 | D | Controller
User가 거절 버튼을 클릭한다. | D | 수강신청 거절 요청
서버와 연결해 User가 입력한 수업정보를 DB에 전송하고 record값을 받아온다.|D|	DB Connection
GUI를 통해 현재의 상태를 화면에 표현한다 | D    | View Library(Page Maker)
사용자에게 화면을 보여주는 역할 | K    | User interface
수강신청 거절 성공 여부를 확인한다.|	D|	Valid Checker
수강신청 거절 성공여부를 알리는 팝업창을 보인다.	|D|	Pop-up Maker

### Extracting the Associations
Concept pair|	Association Description|	Association Name
-|-|-
Controller <-> ViewLibrary|	Controller는 View Library에게 요청을 보내고 게시할 내용을 전달한다.| 요청 전달
Page Maker <-> User Interface| 게시할 내용을 전달받고 뷰를 그린다.	|출력
Controller<->DB Connection|	Controller는 DB Connection으로 request를 넘긴다.|요청전달
수강신청 거절 요청 <-> Controller| 수강신청  요청을 Controller에게 전달한다.|	요청 전달
Valid Checker<-> DB connection|	DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker애 넘겨준다.|	유효 여부 전달
Valid Checker<-> Pop-up Maker|	Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다.|생성

### Extracting Attributes
Concept | Attributes | Attributes Description
-|-|-
수강신청 거절 요청 | 거절 요청 | 학생 정보(이름, 학번)

![final_4](https://user-images.githubusercontent.com/64057843/115997106-d18e6f80-a61c-11eb-8d43-58a21b7c20de.png)

