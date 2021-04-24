# Core & Users

Core & Users Team(이하 Core team) 에서는 이 출견관리 플랫폼의 사용자인 교수자와 학생에 대한 유저 모델링, Auth 정보 관리와 관련된 요구사항을 모두 담당하고, 프로젝트 인프라 셋업, version control 관리 등 프로젝트를 진행하는데 필요한 core functionalities 와 infrastructure을 전반적으로 정의하고 담당 한다.  

### 사용자 구분 및 역할

- 교수자(Instrutuctor)  - 플랫폼에 회원가입하고 로그인해 수업을 만들고, 해당 수업을 신청한 학생들을 관리, 및 출결관리를 한다.
- 학생(Student) - 플래폼에 회원가입하고 로그인 해, 수업을 신청하고 본인이 신청한 수업들에 대한 공지사항, 출결 상태 및 상점,벌점을 볼 수 있다.



## Functional Requirements

|Identifier|User Story|Story Points|
|:--:|:--:|:--:|
|FR-1|나는 사용자로서, 인터넷 브라우저만 있으면 어디서나 접속 할 수 있다. |10pt|
|FR-2| 나는 교수자로서, 회원가입시 교수자임을 인증 받을 수 있다. |10pt|
|FR-3|나는 교수자로서, 회원가입시 프로필을 정보를 입력 해 가입 할 수 있다.|15pt|
|FR-4| 나는 교수자로서, 프로필 정보를 수정 할 수 있다. |10pt|
|    FR-5    |나는 교수자로서, 로그인 화면을 통해 로그인을 할 수 있다.|5pt|
|FR-6| 나는 학생으로서, 플랫폼에 해당 학교의 학생임을 인증 받을 수 있다. |5pt|
|    FR-7    | 나는 학생으로서, 회원가입시 프로필을 정보를 입력 해 가입 할 수 있다. |5pt|
|FR-8| 나는 학생으로서, 프로필 정보를 수정 할 수 있다. |5pt|
|FR-9|   나는 학생으로서, 로그인 화면을 통해 로그인을 할 수 있다.   |5pt|
|   FR-10    | 나는 사용자로서, 버튼을 클릭해 로그아웃을 할 수 있다. |3pt|
|   FR-11    | 나는 사용자로서 플랫폼에서 탈퇴할 수 있다. |7pt|



## WIP: Functional Requirement Subtasks

1. FR-1
   - 프런트엔드 보일러플레이트 완성 및 배포
   - HTTP API 서버 가동 및 배포 (Firebase (서버) init)
   - 도메인 연결

2. FR-2
   - Auth api 만들기
   - Form 만들기
   - Form Validation
   - API 연결





## Nonfunctional Requirements

|SIdentifier|User Story|Story points|
|:--:|:--:|:--:|
|NFR-1|사용자는 로그인을 한 번 할 때마다 로그인 유지가 된다. (max-age: 90일)  |5pt|
|NFR-2|사용자는 빠르게 페이지를 접속 할 수 있다. (Server Side Rendering)  |10pt|
|NFR-3| 사용자는 인터넷만 있으면 어디서나 플랫폼에 관계없이 W3C 표준을 따르는 브라우저로 접속을 할 수 있다. |1pt|
|NFR-4| 개발자는 개발환경 설정에 구애받지않고 손쉽게 개발 할 수 있다. |10pt|
|NFR-5| 클라이언트 개발자는 서버와 손쉽게 소통 할 수 있다. (Restful API 통신 및 문서화) |5pt|
|NFR-6| 사용자는 안전하게 플랫폼을 사용 할 수 있다. (HTTPS 통신) |5pt|
|NFR-7| 개발자는 손 쉽게 배포를 할 수 있다. (CI/CD 구축) |10pt|
|NFR-8| 사용자는 플랫폼 내에 consistent 한 UI를 볼 수 있다. |5pt|



## Refined User Stories

|Identifier|User Story|Size|
|:--:|:--:|:--:|
|ST-1|사용자는 웹으로 플랫폼에 접속할 수 있다.|10pt|
|ST-2|사용자는 플랫폼에 회원가입을 할 수 있다.|35pt|
|ST-3|사용자는  플랫폼에 로그인 및 로그아웃 할 수 있다.|13pt|
|ST-4|사용자는 내 프로필 정보를 입력 하고 수정 할 수 있다.|15pt|
|ST-5|사용자는 플랫폼에서 탈퇴할 수 있다.|7pt|
||||
||||
||||
||||

### Rough correspondences

* ST-1 ≈ FR-1
* ST-2 ≈ FR-2 + FR3 + FR-6 + FR-7
* ST-3 ≈ FR-5 + FR-9 + FR10
* ST-4 ≈ FR-4 + FR-8
* ST-5 ≈ FR-11
