import StudentHome from './StudentHome'
import TeacherHome from './TeacherHome'

function Home({ userObj }) {
  return userObj.type === 'S' ? (
    <StudentHome userObj={userObj} />
  ) : (
    <TeacherHome userObj={userObj} />
  )
}

export default Home
