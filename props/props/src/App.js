import './App.css';
import School from './components/School';

const student_list = ['Random Guy1', 'Random Guy2', 'Random Guy3'];
const teacher_list = ['Teacher Guy1', 'Teacher Guy2', 'Teacher Guy3'];

function App() {
  return <School student={student_list} teacher={teacher_list} />
}

export default App;
