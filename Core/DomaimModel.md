### **UC-1(Add_User)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :--- | ------------- |
| UC-1과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| User가 자신의 개인 정보를 입력한다.                          | K    | 개인 정보     |
| User가 회원가입을 요정한다.                                  | K    | 회원가입 요청 |
| 서버와 연결해 User가 기입한 개인정보 및 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection |
| GUI를 통해 현재의 상태를 화면에 표현한다                     | D    | Page Marker   |
| 현재의 상태를 보여주는 GUI                                   | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| ----------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller<-> Page Marker     | Controller는 Page Marker에게 요청을 보내고, GUI를 받는다.    | 요청 전달        |
| Controller <-> View           | Controller는 View에게 게시할 내용을 전달한다.                | 게시             |
| 개인 정보 <-> Controller      | 개인 정보를 Controller에게 제공한다.                         | 데이터 전달      |
| Page Marker <-> View          | Page Marker가 View를 준비한다.                               | 준비             |
| Controller<->DB Connection    | Controller는 DB Connection으로 request를 넘긴다.             | 요청 전달        |
| 회원가입 요청<->Controller    | 회원가입 요청을 Controller에게 전달한다.                     | 요청 전달        |
| Page Marker <-> DB Connection | DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다. | 데이터 전달      |

**Extracting Attributes**

| concept    | Attributes       | Attributes Description                                       |
| ---------- | ---------------- | ------------------------------------------------------------ |
| Controller | 회원가입 Checker | 회원가입 요청이 들어왔을 때 이미 회원가입이 되어있는 사용자인지 이메일을 통해 확인한다. |
| 개인 정보  | 개인 정보 record | 사용자가 입력한 개인 정보(이름,email,password)               |

![2](https://user-images.githubusercontent.com/59490892/115526470-091eb400-a2cb-11eb-864a-c2f8a2a7243e.JPG)



### **UC-2(Login)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :--- | ------------- |
| UC-2과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| User가 ID/PW 를 입력한다.                                    | D    | 로그인 요청   |
| 서버와 연결해 User가 기입한 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection |
| GUI를 통해 현재의 상태를 화면에 표현한다                     | D    | Page Marker   |
| 현재의 상태를 보여주는 GUI                                   | K    | View          |
| DB에서 받아온 사용자 정보                                    | K    | 사용자 정보   |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| ----------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller<-> Page Marker     | Controller는 Page Marker에게 요청을 보내고, GUI를 받는다.    | 요청 전달        |
| Controller <-> View           | Controller는 View에게 게시할 내용을 전달한다.                | 게시             |
| Page Marker <-> View          | Page Marker가 View를 준비한다.                               | 준비             |
| Controller<->DB Connection    | Controller는 DB Connection으로 request를 넘긴다.             | 요청 전달        |
| 로그인 요청<->Controller      | 로그인 요청을 Controller에게 전달한다.                       | 요청 전달        |
| Page Marker <-> DB Connection | DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다. | 데이터 전달      |

**Extracting Attributes**

| concept     | Attributes         | Attributes Description                                      |
| ----------- | ------------------ | ----------------------------------------------------------- |
| 사용자 정보 | 사용자 정보 record | DB Connection으로부터 받아온 개인 정보(이름,email,password) |

![3](https://user-images.githubusercontent.com/59490892/115526494-0e7bfe80-a2cb-11eb-8635-ce6e2f86a0eb.JPG)



### **UC-3(Logout)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :--- | ------------- |
| UC-3과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| User가 로그아웃 버튼 클릭한다.                               | D    | 로그아웃 요청 |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection |
| GUI를 통해 현재의 상태를 화면에 표현한다                     | D    | Page Marker   |
| 현재의 상태를 보여주는 GUI                                   | K    | View          |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| ----------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller<-> Page Marker     | Controller는 Page Marker에게 요청을 보내고, GUI를 받는다.    | 요청 전달        |
| Controller <-> View           | Controller는 View에게 게시할 내용을 전달한다.                | 게시             |
| Page Marker <-> View          | Page Marker가 View를 준비한다.                               | 준비             |
| Controller<->DB Connection    | Controller는 DB Connection으로 request를 넘긴다.             | 요청 전달        |
| 로그아웃 요청<->Controller    | 로그아웃 요청을 Controller에게 전달한다.                     | 요청 전달        |
| Page Marker <-> DB Connection | DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다. | 데이터 전달      |

**Extracting Attributes**

| concept | Attributes | Attributes Description |
| ------- | ---------- | ---------------------- |
|         |            |                        |

![4](https://user-images.githubusercontent.com/59490892/115526507-1176ef00-a2cb-11eb-8070-c4527ccbf1ca.JPG)



### **UC-4(Edit_User)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :--- | ------------- |
| UC-4과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| User가 개인정보수정 버튼 클릭한다.                           | D    | 개인정보 요청 |
| 개인정보 수정 후 수정 버튼 클릭한다.                         | D    | 수정 요청     |
| DB에서 받아온 사용자 정보                                    | K    | 사용자 정보   |
| GUI를 통해 현재의 상태를 화면에 표현한다                     | D    | Page Marker   |
| 현재의 상태를 보여주는 GUI                                   | K    | View          |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| ----------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller<-> Page Marker     | Controller는 Page Marker에게 요청을 보내고, GUI를 받는다.    | 요청 전달        |
| Controller <-> View           | Controller는 View에게 게시할 내용을 전달한다.                | 게시             |
| Page Marker <-> View          | Page Marker가 View를 준비한다.                               | 준비             |
| Controller<->DB Connection    | Controller는 DB Connection으로 request를 넘긴다.             | 요청 전달        |
| 개인정보 요청<->Controller    | 개인정보 요청을 Controller에게 전달한다.                     | 요청 전달        |
| 수정 요청<->Controller        | 수정 요청을 Controller에게 전달한다.                         | 요청 전달        |
| Page Marker <-> DB Connection | DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다. | 데이터 전달      |

**Extracting Attributes**

| concept     | Attributes         | Attributes Description                                      |
| ----------- | ------------------ | ----------------------------------------------------------- |
| 사용자 정보 | 사용자 정보 record | DB Connection으로부터 받아온 개인 정보(이름,email,password) |

![5](https://user-images.githubusercontent.com/59490892/115526521-150a7600-a2cb-11eb-8300-b98339c2c743.JPG)



### **UC-5(Remove_User)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name  |
| ------------------------------------------------------------ | :--- | ------------- |
| UC-5과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller    |
| User가 탈퇴 버튼 클릭한다.                                   | D    | 탈퇴 요청     |
| GUI를 통해 현재의 상태를 화면에 표현한다                     | D    | Page Marker   |
| 현재의 상태를 보여주는 GUI                                   | K    | View          |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection |
| 탈퇴 성공 여부를 확인한다.                                   | D    | Valid Checker |
| 탈퇴 성공여부를 알리는 팝업창을 보인다                       | D    | Pop-up Maker  |

**Extracting the Associations**

| Concept pair                   | Association Description                                      | Association Name |
| ------------------------------ | ------------------------------------------------------------ | ---------------- |
| Controller<-> Page Marker      | Controller는 Page Marker에게 요청을 보내고, GUI를 받는다.    | 요청 전달        |
| Controller <-> View            | Controller는 View에게 게시할 내용을 전달한다.                | 게시             |
| Page Marker <-> View           | Page Marker가 View를 준비한다.                               | 준비             |
| Controller<->DB Connection     | Controller는 DB Connection으로 request를 넘긴다.             | 요청 전달        |
| 탈퇴 요청<->Controller         | 탈퇴 요청을 Controller에게 전달한다.                         | 요청 전달        |
| Page Marker <-> DB Connection  | DB Connection에서 받아온 값을 넘기고, Page Marker는 이 데이터를 화면에 표현한다. | 데이터 전달      |
| Valid Checker<-> DB connection | DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker애 넘겨준다. | 유효 여부 전달   |
| Valid Checker<->  Pop-up Maker | Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다. | 생성             |

**Extracting Attributes**

| concept | Attributes | Attributes Description |
| ------- | ---------- | ---------------------- |
|         |            |                        |

![6](https://user-images.githubusercontent.com/59490892/115526538-18056680-a2cb-11eb-9789-d7cff2bb5ecf.JPG)
