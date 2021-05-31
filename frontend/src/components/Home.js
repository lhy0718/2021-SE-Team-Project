import StudentHome from './StudentHome'
import TeacherHome from './TeacherHome'

function Home({ userObj }) {
  return userObj.role === 'STUDENT' ? (
    <StudentHome userObj={userObj} />
  ) : (
    <TeacherHome userObj={userObj} />
  )
}

export default Home
