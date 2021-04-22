# Detailed Use Cases

## Use Cases

이 링크를 참고 : [link](/FormCreateUpdate/UseCases.md)

## Use Case 7

Use Case UC-7 :|InputExceptionAlert
--|--
Related Requirements:|ST-2, ST-4, ST-6, ST-8
Initiating Actor:|Client
Actor’s Goal:|범위를 벗어난 입력에 대해 사용자에게 알린다.
Participating Actors:|User
Preconditions:|사용자가 폼을 입력하여 전송버튼을 클릭한다.
Postconditions:|입력이 유효하지 않다면 사용다에게 에러 메시지를 띄운다.
||입력이 유효하다면 서버에게 폼 데이터를 전송한다.
||**Flow of Events for Main Success Scenario:**
→|1. 사용자가 폼을 입력하고 페이지에 있는 전송버튼(summit)을 클릭한다.
||2. (a)숫자, (b)문자, (c)날짜 등의 입력의 포멧이 맞는지 확인한다.
←|2a. 범위를 벗어난 숫자를 입력하면 오류 메시지를 반환한다.
←|2b. 입력할 수 없는 문자를 입력하면 오류 메시지를 반환한다.
←|2c. 유효하지 않은 날짜를 입력하면 오류 메시지를 반환한다.
←|3. 포멧에 맞지 않는 타입의 데이터를 입력하면 오류 메시지를 반환한다.
←|1a. 서버에서 입력에 대한 오류를 발견했을 때에는 오류정보를 받아서 출력한다.

## Use Case 8

Use Case UC-8 :|RequestExceptionIgnore
--|--
Related Requirements:|ST-2, ST-4, ST-6, ST-8
Initiating Actor:|Server
Actor’s Goal:|중복 또는 비정상적인 요청이 들어오면 무시한다.
Participating Actors:|User
Preconditions:|이미 존재하는 데이터에 대한 추가 요청이 들어온다.
||없는 데이터에 대한 수정 또는 삭제 요청이 들어온다.
||이전에 처리한 중복 요청이 들어온다.
Postconditions:|비정상적인 요청을 내부적으로 무시한다.
||사용자에게 예외처리된 요청을 알린다.
||**Flow of Events for Main Success Scenario:**
→|1. (a)중복 또는 (b)추가할 수 없거나 (c)제거 및 수정할 수 없는 요청이 들어옴
||2. 예외를 내부적으로 감지한다.
←|3. 사용자에게 예외에 대한 메시지를 보낸다.

## Use Case 9

Use Case UC-9 :|ServerResponse
--|--
Related Requirements:|ST-2, ST-3, ST-4, ST-5, ST-6, ST-7, ST-8
Initiating Actor:|Server
Actor’s Goal:|사용자의 입력에 따른 웹 페이지를 전송한다.
Participating Actors:|User
Preconditions:|사용자가 서버에 특정 url을 요청한다.
||클라이언트로부터 사용자의 요청과 디바이스 정보 등이 전송된다.
Postconditions:|요청에 맞는 웹페이지가 클라이언트에 표시된다.
||**Flow of Events for Main Success Scenario:**
→|1. 사용자가 강의를 등록하기 위한 페이지에 접속한다.
←|2. 사용자가 요청한 url에 대응하여 강의 정보를 입력할 수 있는 페이지를 클라이언트로 전송한다.
→|3. 강의정보를 페이지에 입력한 뒤 서버로 전송한다.
||**Flow of Events for Extensions (Alternate Scenarios):**
||1a. 사용자가 등록되지 않은 강의에 대한 페이지를 요청할 때
←|1. 404에러 페이지를 사용자에게 전송한다.
||2. InputExceptionAlert와 RequestExceptionIgnore 포함 (UC-7, UC-8)
||1b. 사용자가 존재하지 않는 하위 페이지를 요청할 때
←|1. 404에러 페이지를 사용자에게 전송한다.
||2. InputExceptionAlert와 RequestExceptionIgnore 포함 (UC-7, UC-8)

## Use Case 10

Use Case UC-10 :|SaveClass
--|--
Related Requirements:|ST-1, ST-3
Initiating Actor:|Server
Actor’s Goal:|수업 테이블을 과목 리스트로 대분류와 학급 리스트로 소분류로 저장한다.
Participating Actors:|User
Preconditions:|사용자에게 데이터를 입력할 수 있는 페이지가 제공된다.
||사용자가 과목이나 학생 데이터를 서버에 전송한다.
Postconditions:|DB에 사용자가 전송한 데이터가 저장된다.
||사용자에게 과목 리스트의 대분류와 학급 리스트의 소분류로 정리된 데이터를 보여줄 수 있다.
||**Flow of Events for Main Success Scenario:**
→|1. 사용자가 데이터를 입력할 수 있는 페이지에 접속한다.
→|2. 사용자가 과목이나 학생 데이터를 서버에 전송한다.
||3. 유효성 건사 후에 데이터를 저장한다.
←|4. 사용자가 데이터를 요구하면 대분류, 소분류로 정리하여 전송한다.
