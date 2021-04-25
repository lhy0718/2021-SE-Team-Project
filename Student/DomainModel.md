# **Student Domain Model**

## **UC-1(AvailableClassList)**

**Extracting the Responsibilities**
| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ---------------------------------- | ------------ |
|UC-1과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|GUI를 통해 현재의 상태를 화면에 표현한다.|D|iew Library(Page Maker)|
|서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다.|D|DB Connection(DAO+DB)|
|사용자에게 화면을 보여주는 역할|K|User Interface|
|검색 조건에 따라 조회를 원하는 수업만을 검색한다.|D|수업 검색|
|소속되어있는 학교에 개설되어있는 수업들의 목록을 요청한다.|D|수업목록 요청|
|소속되어있는 학교에 개설되어있는 모든 수업들의 목록|K|전체 수업목록|

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|Controller <-> View Library|Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다.|응답|
|View Library <-> User interface|게시할 내용을 전달받고 뷰를 그린다.|뷰를 그림|
|수업 검색 <-> Controller|수업 검색에 대한 요청과 검색 조건을 전달한다.|요청 전달|
|수업목록 요청 <-> Controller|수업목록을 Controller에 요청한다.|요청 전달|
|DB Connection <-> 학생정보|요청받은 수업 목록을 제공해준다.|제공|
|Controller <-> DB Connection|수업을 검색하기 위해 전달 받은 내용을 전달한다.|전달|
|DB Connection <-> Controller|조회를 원하는 수업의 정보를 제공해준다.|제공|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|수업 검색|수업을 검색하기 위한 수업에 대한 정보|수업명, 교수자명, 수업 요일|

![student uc-1](https://user-images.githubusercontent.com/79308015/115994015-4dce8600-a610-11eb-9781-3251b243eca5.jpg)


---

## **UC-2(RegisterClass)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ------------------------------------------------------------ | ------------ |
| UC-2과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)    |
| 신청하고자 하는 수업 정보 (from `UC-1`) | K    | 수업정보 |
| User가 수강등록을 요청한다. | D | 수강등록요청 |
| GUI를 통해 현재의 상태를 화면에 표현한다                                 | D    | 	View Library(Page Maker) |
| 사용자에게 화면을 보여주는 역할                              | K    | 	User interface          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> View Library   | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 수강등록요청 <->Controller    | 수강등록요청을 Controller에게 전달한다                       | 요청 전달    |
| Controller<-> DB Connection    | 저장한 user 데이터를 전달한다                                | 요청/응답      |
| 수업정보 <-> DB Connection    | 수강등록하고자 하는 수업의 정보를 제공한다.                             | 제공      |

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 학생으로 로그인이 되어있는지 확인한다. |
| 수업정보  | 이름, 과목, 교수자, 시간 등  | 수업과 관련된 세부적인 정보           |
| 수강등록요청  | 수강 수업 정보  | 수강등록을 하고자하는 수업의 정보           |

![UC-2](https://user-images.githubusercontent.com/76427521/115990139-b6ac0300-a5fc-11eb-95a7-c2e4c6dec782.PNG)

---

## **UC-3(MyClassList)**

**Extracting the Responsibilities**
| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ---------------------------------- | ------------ |
|UC-3과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|GUI를 통해 현재의 상태를 화면에 표현한다.|D|iew Library(Page Maker)|
|서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다.|D|DB Connection(DAO+DB)|
|사용자에게 화면을 보여주는 역할|K|User Interface|
|수업에 대한 상세한 정보를 요청한다.|D|수업 상세정보 요청|
|사용자가 수강하고 있는 수업목록들을 요청한다.|D|My Class 요청|
|수업에 대한 정보|K|수업 정보|

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|Controller <-> View Library|Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다.|응답|
|View Library <-> User interface|게시할 내용을 전달받고 뷰를 그린다.|뷰를 그림|
|수업 상세정보 요청 <-> Controller|수업에 대한 상세정보를 Controller에 요청한다.|요청 전달|
|My Class 요청 <-> Controller|사용자가 수강중인 수업목록들을 요청한다.|요청 전달|
|DB Connection <-> 수업정보|요청받은 수업 정보를 제공해준다.|제공|
|Controller <-> DB Connection|수강중인 수업을 조회하기 위해 전달 받은 내용을 전달한다.|전달|
|DB Connection <-> Controller|조회를 원하는 수업의 정보들을 제공해준다.|제공|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
|수업 정보|수강중인 수업에 대한 상세정보|수업명, 교수자명 등|

![student uc-3](https://user-images.githubusercontent.com/79308015/115994045-62ab1980-a610-11eb-86d7-ae4167dfa3b3.jpg)

---

## **UC-4(MyClassInfo)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ------------------------------------------------------------ | ------------ |
| UC-4과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)    |
| 수강중인 수업에 대한 학생정보(출결, 별점) | K    | 학생정보 |
| 수강중인 수업의 공지사항 | K    | 공지사항 |
| User가 수업 관련 정보(공지사항, 출결 현황, 별점 등) 조회를 요청한다. (from `UC-3`) | D | 수업상세요청 |
| GUI를 통해 현재의 상태를 화면에 표현한다                                 | D    | 	View Library(Page Maker) |
| 사용자에게 화면을 보여주는 역할                              | K    | 	User interface          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> View Library   | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 수업상세요청 <->Controller    | 수업상세요청을 Controller에게 전달한다                       | 요청 전달    |
| Controller<-> DB Connection    | 저장한 user 데이터를 전달한다                                | 요청/응답      |
| 학생정보 <-> DB Connection    | 수강중인 수업에 대한 학생정보를 제공한다                            | 제공      |
| 공지사항 <-> DB Connection    | 수강중인 수업에 대한 공지사항 제공한다                            | 제공      |

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 학생으로 로그인이 되어있는지 확인한다. |
| 수업상세 요청 | 수업 정보 | 상세요청하고자 하는 수업에 대한 정보 |
| 학생정보 | 출결, 별점 정보 | 해당 수업에 대한 학생의 출결,별점 정보 |

![UC-4](https://user-images.githubusercontent.com/76427521/115997890-c721a500-a61f-11eb-8fec-406697b4f0d9.PNG)
