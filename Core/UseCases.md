# Use Cases

## Deriving Use Cases from System Requirements

- Serivce 는 Server 내의 각 기능에 대한 서비스를 말한다.

| Actor  | Actor's Goal (목표)                                  | Use Case Name    |
| ------ | ---------------------------------------------------- | ---------------- |
| User | 웹에 접속해서 웹 앱을 서버에서 받아오고, 로그인 여부를 체크 |Landing(UC-0) |
| User                                       | 사용자가 기본적인 정보를 입력해 가입을 하기 위함 | AddUser(UC-1)     |
| User                                       | 가입 할 때 해당 기관의 교수자, 학생임을 인증을 받기 위함 |AddUser(UC-1) |
| User                                       | 가입 후 플랫폼에 본인의 계정으로 접속하기 위함 (로그인)     | Login (UC-2)    |
| User                                       | 플랫폼에서 로그아웃 하기 위함     | Logout (UC-3)    |
| User                                       | 로그인 상태에서 자신의 개인정보를 입력, 수정하기위함    | ModifyUser (UC-4) |
| User                                       |  로그인 상태에서 회원탈퇴를 하기 위함(탈퇴) | RemoveUser (UC-5)    |
| VerificationService/<br />via External API | Verify authority (사용자 기관 인증)<br />사용자를 인증할때 쓰는 이메일 전송용 외부 서비스 포함 |UC-1 |
| AuthService | Authenticate User (회원 가입, 로그인 - 토근 발급, 토근확인 및 토큰삭제) |Uc-0, UC-1, UC-2, UC-3 |
| UserService | 유저를 modify 하고 삭제 하기위함 |UC-4, UC-5 |
| WAS 혹은 CDN | Inital web page 를 사용자에게 전달 |UC-0 |



## Use Case Diagram

### Core System

![core system diagram](https://user-images.githubusercontent.com/18115360/115964216-52d2fd00-a55e-11eb-928b-013eed629bdd.png)



### User Sub System

![User Sub System Diagram](https://user-images.githubusercontent.com/18115360/115964634-62534580-a560-11eb-84b1-e0e48c81af6f.png)

## Traceability Matrix

* Requirements : [link](/Core/Requirements.md)

Requirements| Points |UC-0| UC-1 | UC-2 | UC-3 | UC-4 | UC-5 
:--: |:--:|:--:|:--:|:--:|:--:|:--:|:--:
ST-1 | 10 |X|   |   |   |   |   
ST-2 | 25 ||  X |    |    |    |    
ST-3 | 10 ||    |  X |  X |    |    
ST-4 | 8 ||    |    |    |  X |    
ST-5 | 5 ||    |    |    |    |  X 
Max PW|   |10| 25 | 10 | 10 | 8 | 5 
Total PW| |10| 25 | 10 | 10 | 8 | 5 





## Use Case Schema

### UC-0

| Use Case                                 | UC-0 (Landing)                                               |
| ---------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                     | ST-1                                                         |
| Initiating Actor                         | 사용자(교수자/학생) - User(Instructor/Student)               |
| Actor's Goal                             | 웹에 접속해서  웹 앱을 서버에서 받아오고, 로그인 여부를 체크하기 위함 |
| Participating Actors                     | CDN, Authentication Service                                  |
| Preconditions                            | <ol><li>인터넷에  연결 되어야 함</li></ol>                   |
| Postconditions                           | - 로그인이 안되어 있을시 route를 로그인 화면으로 변경<br />- 로그인이 되어있을 시,  사용자에 따라 수업 목록 화면을 다르게 보여준다.<br /> - 로그인이 되어있을 시 recentLoginAt 접속 기록이 남는다.<br /> |
| Flow of Events for Main Success Scenario | 밑에 참조                                                    |

#### Flow of Events for Main Success Scenario

1. 브라우저의 주소창에 주소를 친다.
2. CDN(Content Delivery Network) 혹은 WAS(Web Applicaiton Server) 에서 initial html 로딩, 및 해당 scripts 및 style tag를 읽어 css 및  js contents 로딩을 한다.
3. 컨텐츠 로딩이 되면 logged in 여부를 체크 하는 함수가 실행 되어 서버에게 token값을 가지고 물어본다.
   1. `HTTP STATUS CODE 401:`   로그인이 안되어 있으면 로그인 페이지로 route가 변경 된다.
   2. `HTTP STATUS CODE 200:`  로그인이 되어 있으면 수업 목록 화면으로 route가 변경 된다. 



### UC-1

| Use Case             | UC-1 (AddUser)                                  |
| -------------------- | :----------------------------------------------- |
| Related Requirements | ST-2                                         |
| Initiating Actor     | 사용자(교수자/학생) - User(Instructor/Student) |
| Actor's Goal         | 가입 할 때 기본 정보를 입력 하기 위함 (회원가입) |
| Participating Actors | Verfication Service, User Service |
| Preconditions        | <ol><li>로그인이 안 되어 있을 시,  로그인 화면에 회원가입 버튼이 있다.</li><li>User는 고유의 이메일을 갖고 있어야 한다.</li></ol> |
| Postconditions       | 회원 가입시 기입된 정보가 UserService에 의해 DB에 저장되며 로그인이 자동으로 완료 |
|Flow of Events for Main Success Scenario|밑에 참조|

#### Flow of Events for Main Success Scenario

1. 사용자(User)는 회원 가입 버튼을 클릭한다.  
2. 버튼 클릭 시 회원 가입 페이지로 넘어간다.
3. 기관에 소속된 이메일 앞에 ID를 입력하고 전송을 누른다. Verification Service에 의해 이메일 id값 검증
   1.  `HTTP STATUS CODE 409:`   이미 가입된 이메일이거나 탈퇴한 이메일 이라 가입을 못한다는 팝업창이 뜨고 머무른다.
   2.  `HTTP STATUS CODE 200:` 정상 - External email 발송 API에 의해 해당 이메일로 회원가입 완료 고유 링크가 전송이 된다.
4. 이메일에서 해당 링크로 접속해서 인증 완료시 개인정보 및, 비밀번호를 작성한다.
5. 기입된 정보가 User Service에 의해 db에 저장한다.
6. 회원가입 완료 알림창이 나온다.
7. 알림창이 꺼지면 자동으로 UC-2의 Flow 2번으로 넘어간다.



### UC-2


| Use Case                                 | UC-2 (Login)                                                 |
| ---------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                     | ST-3                                                         |
| Initiating Actor                         | 사용자(교수자/학생) - User(Instructor/Student)               |
| Actor's Goal                             | 가입 후 플랫폼에 본인의 계정으로 접속하기 위함 (로그인)      |
| Participating Actors                     | Authentication Service                                       |
| Preconditions                            | <ol><li>사용자(User)는 회원가입 되어있는 상태여야한다.  </li><li>웹페이지 접속 시, 첫 화면(Login page)에 로그인 페이지가 바로 보여야 한다. </li></ol> |
| Postconditions                           | - 사용자는 로그인을 한 번 할 때마다 로그인 유지가 된다. (max-age: 90일)<br />- MainPage 화면으로 이동한다. |
| Flow of Events for Main Success Scenario | 밑에 참조                                                    |

#### Flow of Events for Main Success Scenario

1. 사용자(User)는 id(email)/password를 입력하고, 로그인 버튼을 클릭한다.
2. 입력받은 user의 id/pw를 Authentication Service가 hash를 통해 db와 대조한다.   
    (i) `HTTP status Code: 200` : MainPage 로 이동 한다.   
  (ii) `HTTP Status code: 400` :로그인 실패 알림창이 나온뒤 계속 동일 페이지에 머무른다. 
3. 해당 브라우저에 토큰이 발급되어 쿠키에 담긴다.  
     

### UC-3


| Use Case                                 | UC-3 (Logout)                                                |
| ---------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                     | ST-4                                                         |
| Initiating Actor                         | 사용자(교수자/학생) - User(Instructor/Student)               |
| Actor's Goal                             | 플랫폼에서 로그아웃 하기 위함                                |
| Participating Actors                     | Authentication Service                                       |
| Preconditions                            | 로그아웃 버튼은 로그인시 보이는 모든 페이지 상단 헤더 에 항상 위치한다. |
| Postconditions                           | 로그아웃 완료 시, 첫 화면(BeforeLogin page)으로 돌아간다.    |
| Flow of Events for Main Success Scenario | <ol><li>사용자(User)는 로그아웃 버튼을 클릭한다.  </li><li>로그아웃 완료 시, 첫 화면(BeforeLogin page)으로 돌아간다.</li></ol> |

#### Flow of Events for Main Success Scenario

1. 사용자는 로그아웃 버튼을 클릭한다.   
2. 로그아웃 완료 시, 첫 화면(LoginPage)으로 돌아간다.   



### UC-4


| Use Case                                 | UC-4 (ModifyUser)                                            |
| ---------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                     | ST-5                                                         |
| Initiating Actor                         | 사용자(교수자/학생) - User(Instructor/Student)               |
| Actor's Goal                             | 로그인 상태에서 자신의 개인정보를 입력,수정하기위함          |
| Participating Actors                     | User Service                                                 |
| Preconditions                            | <ol><li>사용자(User)는 로그인 되어있는 상태여야한다.  </li><li>개인정보 화면 (ProfilePage) 에 접속한 상태여야 한다.</li></ol> |
| Postconditions                           | 개인정보 수정시 수정된 정보가 DB에 저장 및 route 가 ProfilePage로 이동 |
| Flow of Events for Main Success Scenario | 밑에 참조                                                    |

#### Flow of Events for Main Success Scenario

1. 사용자는 개인정보수정 버튼을 클릭하면 ModifyProfilePage 로 이동

2. 개인정보 수정 화면에서 개인 정보를 수정 한다. 

3. 수정 혹은 취소 버튼을 클릭한다.   
   (i)수정: flow 4번으로 이동

   (ii)취소: ProfilePage로 route가 돌아간다.  

4. Client validation: 입력된 정보가 모두 validate 한지 확인 (예를 들면 이름이 제대로 쓰였는지 등)

   1. Fail 시 해당 input 빨간색으로 오류 표시

5. Server validation: 입력된 정보 서버에서 2차 검증 및 완료시 User Service에 의해 db에 저보저장

   1. `status code: 400 ` 문제가 있다고 팝업

6. 완료 되었다고 표시 뒤 route 가 개인정보 화면 (UserProfilePage) 로 이동

### UC-5

| Use Case                                 | UC-5 (RemoveUser)                                            |
| ---------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                     | ST-6                                                         |
| Initiating Actor                         | 사용자(교수자/학생) - User(Instructor/Student)               |
| Actor's Goal                             | 로그인 상태에서 회원탈퇴를 하기 위함(탈퇴)                   |
| Participating Actors                     | User Service                                                 |
| Preconditions                            | 회원탈퇴 버튼은 로그인시 보이는 모든 페이지 상단에 항상 위치한다. |
| Postconditions                           | User의 정보가 DB에 removedAt 이 탈퇴 시점으로 업데이트 된다. |
| Flow of Events for Main Success Scenario | <ol><li>사용자(User)는 회원탈퇴 버튼을 클릭한다.  </li><li>탈퇴 페이지로 이동한다.</li><li>'탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.'라는 문구와 함께 하단에 '계속 진행','취소'버튼이 뜬다.<ol><li>계속 진행:수정된 개인정보를 동일한 id(email)값을 갖는 DB를 삭제시킨 뒤 탈퇴 완료 알림창이 나온다.   </li><li>취소:기본 페이지로 돌아간다.   </li></ol></li></ol> |

#### Flow of Events for Main Success Scenario

1. 사용자는 회원탈퇴 버튼을 클릭한다.
2. 탈퇴 페이지로 이동한다.
3. '탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.'라는 문구와 함께 하단에 '계속 진행','취소'버튼이 뜬다.   
   (i)계속 진행:수정된 개인정보를 동일한 id(email)값을 갖는 DB를 삭제시킨 뒤 탈퇴 완료 알림창이 나온다.   
   (ii)취소:기본 페이지로 돌아간다.     
