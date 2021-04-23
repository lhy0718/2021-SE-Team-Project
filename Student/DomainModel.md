# **Student Domain Model**

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
