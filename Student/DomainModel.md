# **Student Domain Model**

## **UC-1(AvailableClassList)**

**Extracting the Responsibilities**
| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ---------------------------------- | ------------ |
|UC-1과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|서버와 여러 데이터들을 DB에 전송하고 DB로부터 record값을 받아온다.|D|DB Connection|
|가져온 데이터를 페이지에 출력한다.|D|Page Maker|
|불러온 정보가 담긴 페이지를 화면에 출력한다.|K|View|
|DB로부터 받아온 수업목록|K|수업목록|
|각 카테고리(수업명, 교수자명 등)로 수업을 검색한다.|D|수업 검색|
|수업목록 조회를 요청한다.|D|수업목록 요청|

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|수업목록 요청 <-> Controller|수업목록 요청을 Controller에게 전달한다.|요청 전달|
|Controller <-> DB Connection|Controller는 DB Connection으로 사용자의 요청을 전달한다.|요청 전달|
|수업검색 <-> Controller|검색하기 위해 사용자가 입력한 내용과 검색요청을 Controller에게 전달한다. |요청 전달|
|수업정보 <-> DB Connection|DB로부터 수업목록을 받아온다.|데이터 전달|
|DB Connection <-> Page Maker|DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다.|데이터 전달|
|Page Maker <-> View|Page Marker가 View를 준비한다.|준비|
|Controller <-> View|Controller는 View에게 게시할 내용을 전달한다.|게시|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 학생으로 로그인이 되어있는지 확인한다. |
| 수업목록  | 학생의 소속 학교에 등록되어있는 수업 전체 목록  | 사용자가 수강을 신청할 수 있는 수업 전체의 목록          |

![UC-1](https://user-images.githubusercontent.com/79308015/115962076-83ae3480-a554-11eb-8eb2-bdfe868bf43d.jpg)


---

## **UC-2(RegisterClass)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ------------------------------------------------------------ | ------------ |
| UC-2과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업목록을 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page Maker |
| 수강신청을 확인하는 메세지 | K    | 확인팝업 |
| 신청하고자 하는 수업 정보 (from `UC-1`) | K    | 수업정보 |
| 학생으로부터 수강신청에 대한 `예/아니요`를 입력받는다. | D | 수강확인 |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> 확인팝업  | 확인팝업을 View에 전달한다.  | 데이터 전달        |
| View <-> 수업정보  | 수업정보를 View에 전달한다.  | 데이터 전달        |
| View <-> Page Maker  | View를 화면에 출력한다. | 출력      |
| Controller <-> 수강확인  | 수강확인 입력정보를 Controller에 전달한다. | 요청 전달     |
| DB Connection <-> 수업 정보  | DB에 수업정보를 저장한다. | 데이터 전달     |


**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 학생으로 로그인이 되어있는지 확인한다. |
| 수업정보  | 이름, 과목, 교수자, 시간 등  | 수업과 관련된 세부적인 정보           |

![UC-2](https://user-images.githubusercontent.com/76427521/115896856-cf020d80-a496-11eb-880a-24cf910d2c5e.JPG)

---

## **UC-3(MyClassList)**

**Extracting the Responsibilities**
| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ---------------------------------- | ------------ |
|UC-3과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다.|D|Controller|
|서버와 여러 데이터들을 DB에 전송하고 DB로부터 record값을 받아온다.|D|DB Connection|
|가져온 데이터를 페이지에 출력한다.|D|Page Maker|
|불러온 정보가 담긴 페이지를 화면에 출력한다.|K|View|
|DB로부터 받아온 사용자가 수강하고 있는 수업목록|K|MyClass|
|사용자가 수강하고 있는 수업목록 조회를 요청한다.|D|MyClass 요청|
|수업명을 클릭하여 수업 관련 정보(공지사항, 출결 현황, 별점 등) 조회를 요청한다.|D|수업상세 요청|

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
|MyClass 요청 <-> Controller|사용자가 수강하는 수업목록 요청을 Controller에게 전달한다.|요청 전달|
|Controller <-> DB Connection|Controller는 DB Connection으로 사용자의 요청을 전달한다.|요청 전달|
|수업상세 요청 <-> Controller|수업에 대한 상세정보 조회를 Controller에 요청한다.|요청 전달|
|MyClass <-> DB Connection|DB로부터 사용자가 수강하는 수업목록을 받아온다.|데이터 전달|
|DB Connection <-> Page Maker|DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다.|데이터 전달|
|Page Maker <-> View|Page Marker가 View를 준비한다.|준비|
|Controller <-> View|Controller는 View에게 게시할 내용을 전달한다.|게시|

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 학생으로 로그인이 되어있는지 확인한다. |
| MyClass|수강중인 수업 정보| 학생(사용자)가 수강중인 수업들의 정보(수업명, 교수자명 등)

![UC-3](https://user-images.githubusercontent.com/79308015/115962327-c0c6f680-a555-11eb-9593-e0125ed2300a.jpg)

---

## **UC-4(MyClassInfo)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| -------------------------- | ------------------------------------------------------------ | ------------ |
| UC-2과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| 로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업목록을 요청한다. | D    | DB Connection    |
| 가져온 데이터를 페이지(화면)에 출력한다.                                 | D    | Page Maker |
| 수강중인 수업에 대한 학생정보(출결, 별점) | K    | 학생정보 |
| 수강중인 수업의 공지사항 | K    | 공지사항 |
| 학생정보를 확인하고자 하는 수업의 정보 (from `UC-3`) | K    | 수업정보 |
| 불러온 정보를 보여주는 페이지                                 | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| :--------------------------: | ------------------------------------------------------------ | ------------ |
| Controller <-> DB Connection   | Controller는 DB Connection으로 request를 넘긴다.   | 요청 전달        |
| View <-> 확생정보  | 확생정보를 View에 전달한다.  | 데이터 전달        |
| View <-> Page Maker  | View를 화면에 출력한다. | 출력      |
| 수업정보 <-> Controller  | 수업정보를 통해 Contoller에 해당 수업의 학생정보를 요청한다.  | 출력      |
| DB Connection <-> 학생 정보  | DB에서 수업의 학생정보를 가져와 전달한다. | 데이터 전달     |
| DB Connection <-> 공지사항  | DB에서 수업의 공지사항을 가져와 전달한다. | 데이터 전달     |


**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 학생으로 로그인이 되어있는지 확인한다. |
| 학생정보 | 출결, 별점 정보 | 해당 수업에 대한 학생의 출결,별점 정보 |

![UC-4](https://user-images.githubusercontent.com/76427521/115896866-d0cbd100-a496-11eb-80a9-41666a4cc87a.JPG)
