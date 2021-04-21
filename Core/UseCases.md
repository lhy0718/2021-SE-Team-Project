# Use Cases

## Deriving Use Cases from System Requirements

| Actor  | Actor's Goal (목표)                                  | Use Case Name    |
| ------ | ---------------------------------------------------- | ---------------- |
| 교수자 | 가입 할 때 기본 정보를 입력 하기 위함 (회원가입)     | Add_User(UC-1)     |
| 교수자 | 가입 후 플랫폼에 본인의 계정으로 접속하기 위함 (로그인)     | Login (UC-2)    |
| 교수자 | 플랫폼에서 로그아웃 하기 위함     | Logout (UC-3)    |
| 교수자 | 로그인 상태에서 자신의 개인정보를 입력,수정하기위함     | Edit_User (UC-4)    |
| 교수자 |  로그인 상태에서 회원탈퇴를 하기 위함(탈퇴) | Remove_User (UC-5)    |
| DB | 유저의 데이터를 저장,삭제 및 불러오는 역할 |UC-1,UC-2,UC-3,UC-4,UC-5 |

## Use Case Diagram

## Traceability Matrix

* Requirements : [link](/Core/Requirements.md)

Req't| PW | UC1| UC2| UC3| UC4| UC5|
:--: |:--:|:--:|:--:|:--:|:--:|:--:|
ST-1 |  10 |  X |  X |  X |  X |  X |
ST-2 |  15 |  X |    |    |    |    |
ST-3 |  8 |    |  X |  X |    |    |
ST-4 |  7 |    |    |    |  X |    |
ST-4 |  7 |    |    |    |    |  X |
Max PW|   |  15 |  10 |  10 |  10 |  10 |
Total PW| |  25 |  18 |  18 |  17 |  17 |


## Use Case Schema
| Use Case             | UC1(Add_User)                                    |
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


| Use Case                                | UC2(Login)                                                   |
| --------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                    | AM-3                                                         |
| Initiating Actor                        | 교수자(User)                                                 |
| Actor's Goal                            | 가입 후 플랫폼에 본인의 계정으로 접속하기 위함 (로그인)      |
| Participating Actors                    | Customers,DataBase                                           |
| Preconditions                           | 웹페이지 접속 시, 첫 화면(BeforeLogin page)에 로그인 페이지가 바로 보여야 한다. |
| Postconditions                          | 사용자는 로그인을 한 번 할 때마다 로그인 유지가 된다. (max-age: 90일)	|
| Flow of Events for Main Success Senario | <ol><li>교수자(User)는 id(email)/password를 입력하고, 로그인 버튼을 클릭한다. </li><li>입력받은 user의 id/pw를 DataBase와 대조한다.<ol><li>True:AfterLogin page로 돌아간다. </li><li>False:로그인 실패 알림창이 나온뒤 계속 동일 페이지에 머무른다.</li></ol></li></ol>                                                  |

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


| Use Case                                | UC4(Edit_User)                                               |
| --------------------------------------- | :----------------------------------------------------------- |
| Related Requirements                    | AM-5                                                         |
| Initiating Actor                        | 교수자(User)                                                 |
| Actor's Goal                            | 로그인 상태에서 자신의 개인정보를 입력,수정하기위함          |
| Participating Actors                    | Customers,DataBase                                           |
| Preconditions                           |<ol><li>교수자(User)는 로그인 되어있는 상태여야한다.  </li><li>개인정보수정 버튼은 로그인시 보이는 모든 페이지 상단에 항상 위치한다.</li></ol>  |
| Postconditions                          |개인정보 수정시 수정된 정보가 DB에 저장된다.                                                              |
| Flow of Events for Main Success Senario | <ol><li>교수자(User)는 개인정보수정 버튼을 클릭한다.  </li><li>현재 로그인되어있는 id를 DataBase와 대조하여 개인정보를 불러온다.</li><li> 불러온 개인정보를 조회 및 수정한다.</li><li>수정 혹은 취소 버튼을 클릭한다.<ol><li>수정:수정된 개인정보를 동일한 id(email)값을 갖는 DataBase에 edit한 뒤 이전 기본 페이지로 돌아간다.   </li><li>취소:기본 페이지로 돌아간다.   </li></ol></li></ol>             |

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
