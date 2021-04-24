# Teacher Domain Model

## UC-9 (StudentPoint)

### Extracting the Responsibilities

Responsibility Description | Type | Concept Name
-|-|-
UC-9와 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller
로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업의 학생목록을 요청한다. | D | DB Connection
가져온 데이터를 페이지(화면)에 출력한다. | D | Page Maker
개별 학생에게 별점을 부과하는 요청 | K | 별점 부과 요청
불러온 정보를 보여주는 페이지 | K | View

### Extracting the Associations

Concept pair | Association Description | Association Name
:-:|-|-
Controller <-> DB Connection | Controller는 DB Connection으로 request를 넘긴다. | 요청 전달
Controller <-> Page Maker | Controller는 요청을 Page Maker에게 전달하고, 페이지를 수신한다. | 요청 전달
Page Maker <-> DB Connection | DB Connection이 학생목록과 각 학생의 별점 정보를 전달한다. | 데이터 전달
View <-> Page Maker | View를 화면에 출력한다. | 출력
Controller <-> 별점 부과 요청 | 학생목록에서 선택한 학생에 대해 별점을 부과할지 물어보고 요청을 받는다. | 수신

### Extracting Attributes

Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
별점 부과 요청 | 요청 폼 | 수업의 id, 학생의 id, 부과할 별점을 포함하는 폼 데이터

## UC-10 (ClassNotice)

### Extracting the Responsibilities

Responsibility Description | Type | Concept Name
-|-|-
UC-10과 연관된 개념들의 행동들을 조정하고 다른 개념에 작업을 위임한다. | D | Controller
로그인 상태를 확인하여, 유저 정보를 바탕으로 DB에 있는 수업목록을 요청한다. | D | DB Connection
가져온 데이터를 페이지(화면)에 출력한다. | D | Page Maker
불러온 정보를 보여주는 페이지 | K | View
공지를 학생들에게 전달하는 요청 | K | 공지 전달 요청

### Extracting the Associations

Concept pair | Association Description | Association Name
-|-|-
Controller <-> DB Connection | Controller는 DB Connection으로 request를 넘긴다. | 요청 전달
Controller <-> Page Maker | Controller는 요청을 Page Maker에게 전달하고, 페이지를 수신한다. | 요청 전달
Page Maker <-> DB Connection | DB Connection이 학생목록과 각 학생의 별점 정보를 전달한다. | 데이터 전달
View <-> Page Maker | View를 화면에 출력한다. | 출력
Controller <-> 공지 전달 요청 | 학생들에게 전달할 공지의 제목과 내용을 물어보고 요청을 받는다. | 수신

### Extracting Attributes

Concept | Attributes | Attributes Description
-|-|-
Controller | 로그인 정보 | 어떤 요청이 들어왔을 때 교수자로 로그인이 되어있는지 확인한다.
공지 전달 요청 | 요청 폼 | 수업의 id, 공지 제목, 공지 내용을 포함하는 폼 데이터
