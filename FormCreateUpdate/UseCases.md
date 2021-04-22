# Use Cases

## Deriving Use Cases from System Requirements

Actor|Actor’s Goal|Use Case Name
:--:|:--:|:--:
사용자|과목 리스트에서 과목을 추가하기 위해 서버에 요청을 보낸다.|UpdateDB (UC-1)
사용자|과목 리스트에서 과목을 수정하기 위해 서버에 요청을 보낸다.|UC-1
사용자|과목 리스트에서 과목을 삭제하기 위해 서버에 요청을 보낸다.|UC-1
사용자|학급 리스트에서 학생을 추가하기 위해 서버에 요청을 보낸다.|UC-1
사용자|학급 리스트에서 학생을 수정하기 위해 서버에 요청을 보낸다.|UC-1
사용자|학급 리스트에서 학생을 삭제하기 위해 서버에 요청을 보낸다.|UC-1
웹 클라이언트|범위를 벗어난 입력에 대해 사용자에게 알린다.|InputExceptionAlert (UC-2)
서버|중복 또는 비정상적인 요청이 들어오면 무시한다.|RequestExceptionIgnore (UC-3)
서버|서버에 중복 또는 비정상적인 요청이 들어오면 사용자에게 알린다.|UC-2, UC-3
서버|사용자의 입력에 따른 웹 페이지를 전송한다.|ServerResponse (UC-4)
서버|수업 테이블을 과목 리스트로 대분류와 학급 리스트로 소분류로 저장한다.|SaveClass (UC-5)

## Use Case Diagram

## Traceability Matrix

* Requirements : [link](/FormCreateUpdate/Requirements.md)

Req't| PW | UC1| UC2| UC3| UC4| UC5
:--: |:--:|:--:|:--:|:--:|:--:|:--:
ST-1|6|X||||X
ST-2|1||X|X||
ST-3|3||||X|X
ST-4|2||X|X|X|
ST-5|5||||X|
ST-6|3||X|X|X|
ST-7|1|X|||X|
ST-8|2||X|X|X|
Max PW||6|3|3|5|6
Total PW||7|8|8|16|9
