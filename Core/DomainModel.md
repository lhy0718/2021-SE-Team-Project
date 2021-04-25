### **UC-1(AddUser)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name              |
| ------------------------------------------------------------ | :--- | ------------------------- |
| UC-1과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller                |
| User가 이메일 인증을 요청한다.                               | D    | 이메일 인증 요청          |
| User가 회원가입을 요정한다.                                  | D    | 회원가입 요청             |
| 메일 사용 가능여부를 확인한다.                               | D    | verification              |
| 사용 불가능한 이메일일 경우 Pop-up Maker를 생성해준다.       | D    | Pop-up Maker              |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)     |
| GUI를 통해 현재의 상태를 화면에 표현한다                     | D    | View Library(Page Marker) |
| 사용자에게 화면을 보여주는 역할                              | K    | User interface            |

**Extracting the Associations**

| Concept pair                  | Association Description                                      | Association Name |
| ----------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller <-> View Library   | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 이메일 인증 요청<->Controller | 이메일 인증 요청을 Controller에게 전달한다                   | 요청 전달        |
| Controller<->verification     | 확인 요청을 verification에 전달한다.                         | 요청 전달        |
| verification<->DB Connection  | DB connection에서 이메일 인증 요청된 데이터가 사용 가능한지의 대한 여부를 verification 넘겨준다. | 요청/응답        |
| verification<-> Pop-up Maker  | DB에서 받은 응답을 토대로 pop-up을 생성해야 하는 경우 생성 명령을 전달한다. | 생성             |
| 회원가입 요청<->Controller    | 회원가입요청을 Controller에게 전달한다                       | 요청 전달        |
| Controller<->DB Connection    | 저장한 user 데이터를 전달한다                                | 데이터 전달      |

**Extracting Attributes**

| concept          | Attributes            | Attributes Description           |
| ---------------- | --------------------- | -------------------------------- |
| 이메일 인증 요청 | 이메일 인증 요청 정보 | email                            |
| 회원가입 요청    | 회원가입 요청 정보    | uid,email,name,password,userRole |

![1](https://user-images.githubusercontent.com/59490892/115989315-bc074e80-a5f8-11eb-9813-fef78a9f9af4.JPG)



### **UC-2(Login)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name              |
| ------------------------------------------------------------ | :--- | ------------------------- |
| UC-2과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller                |
| User가 ID/PW 를 입력한다.                                    | D    | 로그인 요청               |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)     |
| GUI를 통해 현재의 상태를 화면에 표현한다.                    | D    | View Library(Page Marker) |
| 사용자에게 화면을 보여주는 역할                              | K    | User interface            |
| DB에서 받아온 사용자 정보                                    | K    | 사용자 정보               |
| 사용자 인증 역할                                             | D    | AuthUser                  |
| 입력받은 user의 id/pw를 db와 대조                            | D    | Auth Service              |

**Extracting the Associations**

| Concept pair                      | Association Description                                      | Association Name |
| --------------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller <-> View Library       | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface     | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 로그인 요청<->Controller          | 로그인 요청을 Controller에게 전달한다                        | 요청 전달        |
| Controller<->Auth Service         | 사용자 정보와 입력받은 값을 대조하라는 요청을 받고 그에 따른 결과값을 반환한다. | 요청 /응답       |
| Auth Service <-> AuthUser         | 전달받은 인증 사항을 전달한다.                               | 데이터 전달      |
| AuthUser<->DB Connection          | 사용자 정보 제공을 요청한다.                                 | 응답             |
| DB Connection&lt;-&gt;사용자 정보 | 요청받은 사용자 정보를 제공해준다.                           | 제공             |
| 사용자 정보<->Auth Service        | 제공받은 사용자 정보를 전달한다.                             | 사용             |

**Extracting Attributes**

| concept     | Attributes         | Attributes Description                                 |
| ----------- | ------------------ | ------------------------------------------------------ |
| 사용자 정보 | 사용자 정보 record | DB로부터 받아온 개인 정보(uid,email,password,userRole) |
| 로그인 요청 | 로그인 요청        | 로그인 요청 정보(email,password)                       |

![2](https://user-images.githubusercontent.com/59490892/115989320-c0cc0280-a5f8-11eb-8733-c282717bf930.JPG)



### **UC-3(Logout)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name              |
| ------------------------------------------------------------ | :--- | ------------------------- |
| UC-3과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller                |
| User가 로그아웃 버튼 클릭한다.                               | D    | 로그아웃 요청             |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)     |
| GUI를 통해 현재의 상태를 화면에 표현한다.                    | D    | View Library(Page Marker) |
| 사용자에게 화면을 보여주는 역할을 한다.                      | K    | User interface            |

**Extracting the Associations**

| Concept pair                     | Association Description                                      | Association Name |
| -------------------------------- | ------------------------------------------------------------ | ---------------- |
| Controller <-> View Library      | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답             |
| View Library<->User interface    | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림        |
| 로그아웃 요청<->Controller       | 로그아웃 요청을 Controller에게 전달한다                      | 요청 전달        |
| DB Connection&lt;-&gt;Controller | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답        |

**Extracting Attributes**

| concept       | Attributes    | Attributes Description             |
| ------------- | ------------- | ---------------------------------- |
| 로그아웃 요청 | 로그아웃 요청 | 로그아웃 요청 정보(email,password) |

![3](https://user-images.githubusercontent.com/59490892/115989325-c4f82000-a5f8-11eb-905e-3bd0d7a6cc02.JPG)



### **UC-4(ModifyUser)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name              |
| ------------------------------------------------------------ | :--- | ------------------------- |
| UC-4과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller                |
| User가 개인정보수정 버튼 클릭한다.                           | D    | 개인정보 요청             |
| 개인정보 수정 후 수정 버튼 클릭한다.                         | D    | 개인정보수정 요청         |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)     |
| GUI를 통해 현재의 상태를 화면에 표현한다.                    | D    | View Library(Page Marker) |
| 사용자에게 화면을 보여주는 역할을 한다.                      | K    | User interface            |
| 사용자가 문자열을 입력                                       | D    | UserInput                 |
| DB에서 받아온 사용자 정보                                    | K    | 사용자 정보               |
| 입력된 정보가 모두 validate 한지 확인                        | D    | Valid Checker             |
| 수정 성공여부를 알리는 팝업창을 보인다                       | D    | Pop-up Maker              |

**Extracting the Associations**

| Concept pair                      | Association Description                                      | Association Name    |
| --------------------------------- | ------------------------------------------------------------ | ------------------- |
| Controller <-> View Library       | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답                |
| View Library<->User interface     | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림           |
| 개인정보 요청<->Controller        | 개인정보 요청을 Controller에게 전달한다                      | 요청 전달           |
| DB Connection&lt;-&gt;Controller  | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답           |
| DB Connection&lt;-&gt;사용자 정보 | 요청받은 사용자 정보를 제공해준다.                           | 제공                |
| 개인정보수정 요청<->Controller    | 개인정보수정 요청을 Controller에게 전달한다                  | 요청 전달           |
| Controller<-> Valid Checker       | 입력된 데이터를 전송해주고, valid 여부를 확인한다.           | 요청 전달           |
| Valid Checker<-> Pop-up Maker     | Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다. | 생성                |
| Valid Checker<-> DB connection    | DB connection에서 수정 요청된 데이터가 잘 수정되어있는지의 여부를 Valid Checker에 넘겨준다. | Valid여부 확인/전달 |

**Extracting Attributes**

| concept           | Attributes | Attributes Description  |
| ----------------- | ---------- | ----------------------- |
| 개인정보 요청     | user정보   | email                   |
| 개인정보수정 요청 | 수정정보   | uid,email,name,password |

![4](https://user-images.githubusercontent.com/59490892/115989331-c9243d80-a5f8-11eb-8d2c-6d563ca6c2eb.JPG)



### **UC-5(RemoveUser)**

**Extracting the Responsibilities**

| Responsibility Description                                   | Type | Concept Name              |
| ------------------------------------------------------------ | :--- | ------------------------- |
| UC-5과 연관된 개념들을 행동들을 조정하고 다른 개념에 작업을 위임한다. | D    | Controller                |
| User가 탈퇴 버튼 클릭한다.                                   | D    | 탈퇴 요청                 |
| 서버와 연결해 User의 ID/PW 정보를 DB에 전송하고 record값을 받아온다. | D    | DB Connection(DAO+DB)     |
| GUI를 통해 현재의 상태를 화면에 표현한다.                    | D    | View Library(Page Marker) |
| 사용자에게 화면을 보여주는 역할을 한다.                      | K    | User interface            |
| 탈퇴 성공 여부를 확인한다.                                   | D    | Valid Checker             |
| 탈퇴 성공여부를 알리는 팝업창을 보인다                       | D    | Pop-up Maker              |

**Extracting the Associations**

| Concept pair                     | Association Description                                      | Association Name    |
| -------------------------------- | ------------------------------------------------------------ | ------------------- |
| Controller <-> View Library      | Controller는 View Library에 요청을 보내고,게시할 내용을 전달한다. | 응답                |
| View Library<->User interface    | 게시할 내용을 전달받고 뷰를 그린다.                          | 뷰를 그림           |
| 탈퇴 요청<->Controller           | 탈퇴 요청을 Controller에게 전달한다                          | 요청 전달           |
| DB Connection&lt;-&gt;Controller | Controller는 DAO로 request를 넘기고, DAO는 그에 따른 응답을 전달한다. | 요청/응답           |
| Valid Checker<-> DB connection   | DB connection에서 탈퇴 요청된 데이터가 잘 제거되어있는지의 여부를 Valid Checker에 넘겨준다. | 유효 여부 확인/전달 |
| Valid Checker<-> Pop-up Maker    | Pop-up Maker는 Valid Checker에게 정보를 받아 성공/실패에 관한 팝업창을 만든다. | 생성                |

**Extracting Attributes**

| concept   | Attributes | Attributes Description        |
| --------- | ---------- | ----------------------------- |
| 탈퇴 요청 | 탈퇴 요청  | 탈퇴요청 정보(email,password) |

![5](https://user-images.githubusercontent.com/59490892/115989338-cb869780-a5f8-11eb-9148-791f956aebaa.JPG)
