# Use Cases

## Deriving Use Cases from System Requirements

Actor|Actor’s Goal|Use Case Name
:--:|:--:|:--:
사용자|과목 리스트에서 과목을 추가하기 위해 서버에 요청을 보낸다.|AddClass (UC-1)
사용자|과목 리스트에서 과목을 수정하기 위해 서버에 요청을 보낸다.|UpdateClass (UC-2)
사용자|과목 리스트에서 과목을 삭제하기 위해 서버에 요청을 보낸다.|RemoveClass (UC-3)
사용자|학급 리스트에서 학생을 추가하기 위해 서버에 요청을 보낸다.|AddStudent (UC-4)
사용자|학급 리스트에서 학생을 수정하기 위해 서버에 요청을 보낸다.|UpdateStudent (UC-5)
사용자|학급 리스트에서 학생을 삭제하기 위해 서버에 요청을 보낸다.|RemoveClass (UC-6)
서버|서버에 중복 또는 비정상적인 요청이 들어오면 사용자에게 알린다.|RequestExceptionAlert (UC-7)
서버|중복 또는 비정상적인 요청이 들어오면 무시한다.|RequestExceptionIgnore (UC-8)
웹 클라이언트|범위를 벗어난 입력에 대해 사용자에게 알린다.|InputExceptionAlert (UC-9)
서버|사용자의 입력에 따른 웹 페이지를 전송한다.|ServerResponse (UC-10)
서버|수업 테이블을 과목 리스트로 대분류와 학급 리스트로 소분류로 저장한다.|SaveClass (UC-11)

## Use Case Diagram

## Traceability Matrix