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

![UseCaseDiagram](https://user-images.githubusercontent.com/59490892/115492166-399b2980-a29c-11eb-8716-0d2b910917d3.JPG)

## Traceability Matrix

* Requirements : [link](/Core/Requirements.md)

Requirements| Points | UC-1 | UC-2 | UC-3 | UC-4 | UC-5 |UC-6
:--: |:--:|:--:|:--:|:--:|:--:|:--:|----
ST-1 | 10 |   |   |   |   |   |X
ST-2 | 25 |  X |    |    |    |    |
ST-3 | 10 |    |  X |  X |    |    |
ST-4 | 8 |    |    |    |  X |    |
ST-4 | 5 |    |    |    |    |  X |
Max PW|   |  15 |  10 |  10 |  10 |  10 |
Total PW| |  25 |  18 |  18 |  17 |  17 |





## Use Case Schema

| Use Case             | UC-1 (AddUser)                                  |
| -------------------- | :----------------------------------------------- |
| Related Requirements | AM-2                                             |
| Initiating Actor     | 교수자(User)                                     |
| Actor's Goal         | 가입 할 때 기본 정보를 입력 하기 위함 (회원가입) |
| Participating Actors | Customers,DataBase                               |
| Preconditions        | <ol><li>웹페이지 접속 시, 첫 화면에 회원가입 버튼이 바로 보여야 한다.</li><li>User는 고유의 이메일을 갖고 있어야 한다.</li></ol>         |
| Postconditions       | 회원 가입시 기입된 정보가 DB에 저장된다.         |
|Flow of Events for Main Success Senario|<ol><li>교수자(User)는 회원 가입 버튼을 클릭한다.  </li><li>버튼 클릭 시 회원 가입 페이지로 넘어간다.</li><li>이메일을 통한 인증 절차를 진행한다.</li><li>인증 완료시 개인정보 및, 비밀번호를 작성한다.</li><li> 기입된 정보를 DataBase에 저장한다.</li><li>가입 성공 시 회원가입 완료 알림창이 나온다.</li><li>알림창이 꺼지면 첫화면(BeforeLogin page)으로 돌아간다.</li></ol>|

Flow of Events for Main Success Senario
1. 교수자(User)는 회원 가입 버튼을 클릭한다.  
2. 버튼 클릭 시 회원 가입 페이지로 넘어간다.
3. 이메일을 통한 인증 절차를 진행한다.
4. 인증 완료시 개인정보 및, 비밀번호를 작성한다.
5. 기입된 정보를 DataBase에 저장한다.
6. 가입 성공 시 회원가입 완료 알림창이 나온다.
7. 알림창이 꺼지면 메인 화면으로 돌아간다.


| Use Case                                | UC-2 (Login)                                                 |
| --------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                    | AM-3                                                         |
| Initiating Actor                        | 교수자(User)                                                 |
| Actor's Goal                            | 가입 후 플랫폼에 본인의 계정으로 접속하기 위함 (로그인)      |
| Participating Actors                    | Customers,DataBase                                           |
| Preconditions                           | <ol><li>교수자(User)는 회원가입 되어있는 상태여야한다.  </li><li>웹페이지 접속 시, 첫 화면(BeforeLogin page)에 로그인 페이지가 바로 보여야 한다. </li></ol> |
| Postconditions                          | 사용자는 로그인을 한 번 할 때마다 로그인 유지가 된다. (max-age: 90일) |
| Flow of Events for Main Success Senario | <ol><li>교수자(User)는 id(email)/password를 입력하고, 로그인 버튼을 클릭한다. </li><li>입력받은 user의 id/pw를 DataBase와 대조한다.<ol><li>True:AfterLogin page로 돌아간다. </li><li>False:로그인 실패 알림창이 나온뒤 계속 동일 페이지에 머무른다.</li></ol></li></ol> |

Flow of Events for Main Success Senario
1. 교수자(User)는 id(email)/password를 입력하고, 로그인 버튼을 클릭한다.
2. 입력받은 user의 id/pw를 DataBase와 대조한다.   
    (i)True:AfterLogin page로 돌아간다.   
    (ii)False:로그인 실패 알림창이 나온뒤 계속 동일 페이지에 머무른다.   


| Use Case                                | UC3(Logout)                                                  |
| --------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                    | AM-4                                                         |
| Initiating Actor                        | 교수자(User)                                                 |
| Actor's Goal                            | 플랫폼에서 로그아웃 하기 위함                                |
| Participating Actors                    | Customers,DataBase                                           |
| Preconditions                           | 로그아웃 버튼은 로그인시 보이는 모든 페이지 상단에 항상 위치한다. |
| Postconditions                          | 로그아웃 완료 시, 첫 화면(BeforeLogin page)으로 돌아간다.    |
| Flow of Events for Main Success Senario |  <ol><li>교수자(User)는 로그아웃 버튼을 클릭한다.  </li><li>로그아웃 완료 시, 첫 화면(BeforeLogin page)으로 돌아간다.</li></ol>        |

Flow of Events for Main Success Senario
1. 교수자(User)는 로그아웃 버튼을 클릭한다.   
2. 로그아웃 완료 시, 첫 화면(BeforeLogin page)으로 돌아간다.   


| Use Case                                | UC4(MoidfyUser)                                              |
| --------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                    | AM-5                                                         |
| Initiating Actor                        | 교수자(User)                                                 |
| Actor's Goal                            | 로그인 상태에서 자신의 개인정보를 입력,수정하기위함          |
| Participating Actors                    | Customers,DataBase                                           |
| Preconditions                           | <ol><li>교수자(User)는 로그인 되어있는 상태여야한다.  </li><li>개인정보수정 버튼은 로그인시 보이는 모든 페이지 상단에 항상 위치한다.</li></ol> |
| Postconditions                          | 개인정보 수정시 수정된 정보가 DB에 저장된다.                 |
| Flow of Events for Main Success Senario | <ol><li>교수자(User)는 개인정보수정 버튼을 클릭한다.  </li><li>현재 로그인되어있는 id를 DataBase와 대조하여 개인정보를 불러온다.</li><li> 불러온 개인정보를 조회 및 수정한다.</li><li>수정 혹은 취소 버튼을 클릭한다.<ol><li>수정:수정된 개인정보를 동일한 id(email)값을 갖는 DataBase에 edit한 뒤 이전 기본 페이지로 돌아간다.   </li><li>취소:기본 페이지로 돌아간다.   </li></ol></li></ol> |

Flow of Events for Main Success Senario
1. 교수자(User)는 개인정보수정 버튼을 클릭한다.
2. 현재 로그인되어있는 id를 DataBase와 대조하여 개인정보를 불러온다.
3. 불러온 개인정보를 조회 및 수정한다.
4. 수정 혹은 취소 버튼을 클릭한다.   
   (i)수정:수정된 개인정보를 동일한 id(email)값을 갖는 DataBase에 edit한 뒤 이전 기본 페이지로 돌아간다.   
   (ii)취소:기본 페이지로 돌아간다.   
   
   
| Use Case                                | UC5(Edit_User)                                               |
| --------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                    | AM-6                                                         |
| Initiating Actor                        | 교수자(User)                                                 |
| Actor's Goal                            | 로그인 상태에서 회원탈퇴를 하기 위함(탈퇴)                   |
| Participating Actors                    | Customers,DataBase                                           |
| Preconditions                           | 회원탈퇴 버튼은 로그인시 보이는 모든 페이지 상단에 항상 위치한다. |
| Postconditions                          | 탈퇴시 User의 모든 정보가 DB에서 삭제된다.                   |
| Flow of Events for Main Success Senario | <ol><li>교수자(User)는 회원탈퇴 버튼을 클릭한다.  </li><li>탈퇴 페이지로 이동한다.</li><li>'탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.'라는 문구와 함께 하단에 '계속 진행','취소'버튼이 뜬다.<ol><li>계속 진행:수정된 개인정보를 동일한 id(email)값을 갖는 DB를 삭제시킨 뒤 탈퇴 완료 알림창이 나온다.   </li><li>취소:기본 페이지로 돌아간다.   </li></ol></li></ol>|

Flow of Events for Main Success Senario
1. 교수자(User)는 회원탈퇴 버튼을 클릭한다.
2. 탈퇴 페이지로 이동한다.
3. '탈퇴하시겠습니까? 탈퇴 시 모든 정보가 삭제됩니다.'라는 문구와 함께 하단에 '계속 진행','취소'버튼이 뜬다.   
   (i)계속 진행:수정된 개인정보를 동일한 id(email)값을 갖는 DB를 삭제시킨 뒤 탈퇴 완료 알림창이 나온다.   
   (ii)취소:기본 페이지로 돌아간다.     
