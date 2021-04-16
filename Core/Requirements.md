# Core & Auth

Core & Auth Team 에서는 이 플랫폼의 메인 사용자인 교수자에 대한 모델링 및 Auth 관련된 요구사항을 모두 담당하고, 프로젝트(프런트엔드 및 백엔드) 셋업, version control 관리, 협업툴 관리, Agile 보드 관리 등 프로젝트를 진행하는데 필요한 core functionalities 를 만들고 규칙들을 정의한다.  

### 사용자 : 출결관리 시스템을 이용하는 교수자 (교사)

## Functional Requirements
|Identifier|User Story|Story Points|
|:--:|:--:|:--:|
|AM-1|나는 교수자로써, 웹으로 플랫폼에 접속할 수 있다. |10pt|
|AM-2|나는 교수자로써, 플랫폼에 회원가입을 할 수 있다.|15pt|
|AM-3|나는 교수자로써, 플랫폼에 로그인을 할 수 있다.|5pt|
|AM-4| 나는 교수자로써, 버튼을 클릭해 로그아웃을 할 수 있다. |3pt|
|AM-5| 나는 교수자로써 내 프로필 정보를 입력 하고 수정 할 수 있다. |7pt|
|AM-7| 나는 교수자로써 플랫폼에서 탈퇴할 수 있다. |7pt|


## WIP: Functional Requirement Subtasks

1. AM-1
   - 프런트엔드 보일러플레이트 완성 및 배포
   - HTTP API 서버 가동 및 배포 (Firebase (서버) init)
   - 도메인 연결

2. AM-2
   - Auth api 만들기
   - Form 만들기
   - Form Validation
   - API 연결







## WIP: Nonfunctional Requirements

|SIdentifier|User Story|Story points|
|:--:|:--:|:--:|
|NFR-1|사용자는 로그인을 한 번 할 때마다 로그인 유지가 된다. (max-age: 90일)  |5pt|
|NFR-2|사용자는 빠르게 페이지를 접속 할 수 있다. (Server Side Rendering)  |3pt|
|NFR-3| 사용자는 인터넷만 있으면 어디서나 플랫폼에 관계없이 HTML5표준을 따르는 브라우저 규격으로 접속을 할 수 있다. |1pt|
|NFR-4| 개발자는 개발환경 설정에 구애받지않고 손쉽게 개발 할 수 있다. |5pt|
|NFR-5| 클라이언트 개발자는 서버와 손쉽게 소통 할 수 있다. (Restful API 통신) |-|
|NFR-6| 사용자는 안전하게 플랫폼을 사용 할 수 있다. (HTTPS 통신) |2pt|
|NFR-7| 개발자는 손 쉽게 배포를 할 수 있다. (CI/CD 구축) |5pt|
||  ||



## Refined User Stories

|Identifier|User Story|Size|
|:--:|:--:|:--:|
|ST-1|사용자는 웹으로 플랫폼에 접속할 수 있다.|10pt|
|ST-2|사용자는 플랫폼에 회원가입을 할 수 있다.|15pt|
|ST-3|사용자는  플랫폼에 로그인 및 로그아웃 할 수 있다.|8pt|
|ST-4|사용자는 내 프로필 정보를 입력 하고 수정 할 수 있다.|7pt|
|ST-5|사용자는 플랫폼에서 탈퇴할 수 있다.|7pt|

### Rough correspondences

* ST-1 ≈ AM-2
* ST-2 ≈ AM-2
* ST-3 ≈ AM-3+AM-4
* ST-4 ≈ AM-5
* ST-5 ≈ AM-6

### Use Case 1: 온보딩?

Use Case UC-1: 온보딩 (회원가입 -> 로그인 -> 프로필 설정)

관련 이슈: AM-1, AM-2



### Use Case 2: 

