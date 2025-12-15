import { useState } from "react";
import "./App.css";
import { StudentAddForm, StudentSection } from "./components";

const App = () => {
  // states
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <>
      <StudentAddForm
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <StudentSection
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
        setStudentName={setStudentName}
      />
    </>
  );
};

export default App;
