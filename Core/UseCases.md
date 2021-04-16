# Use Cases

## Deriving Use Cases from System Requirements

| Actor  | Actor's Goal (목표)                                  | Use Case Name    |
| ------ | ---------------------------------------------------- | ---------------- |
| 교수자 | 가입 할 때 기본 정보를 입력 하기 위함 (회원가입)     | Add_User(UC-1)     |
| 교수자 | 가입 후 플랫폼에 본인의 계정으로 접속하기 위함 (로그인)     | Login (UC-2)    |
| 교수자 | 플랫폼에서 로그아웃 하기 위함     | Logout (UC-3)    |
| 교수자 | 로그인 상태에서 자신의 개인정보를 입력,수정하기위함     | Edit_User (UC-4)    |
| 교수자 |  로그인 상태에서 회원탈퇴를 하기 위함(탈퇴) | Remove_User (UC-5)    |
| 로그인 버튼 |                                                      |                  |
| 로그아웃 버튼 |                                                      |                  |
| 회원가입 버튼 |                                                      |                  |

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