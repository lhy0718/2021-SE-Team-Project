# Detailed Use Cases

## Use Cases

이 링크를 참고 : [link](/FormCreateUpdate/UseCases.md)

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
||**Flow of Events for Extensions:**
→|1a. 사용자가 등록되지 않은 강의에 대한 페이지를 요청한다.
←|2a. 404에러 페이지를 사용자에게 전송한다.
||3a. InputExceptionAlert와 RequestExceptionIgnore 포함 (UC-2, UC-3)
→|1b. 사용자가 존재하지 않는 하위 페이지를 요청한다.
←|2b. 404에러 페이지를 사용자에게 전송한다.
