import { useState } from "react";
import { StudentCtx } from "./StudentContext";

const StudentProvider = (props) => {
  // props
  const { children } = props;

  // states
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  // handler functions
  const handleAccidentallyAdded = (student) => {
    const updatedStudents = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: !item.isPresent,
        };
      }
      return item;
    });
    setStudents(updatedStudents);
  };

  const ctxValue = {
    handleAccidentallyAdded,
    students,
    setStudents,
    studentName,
    setStudentName,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
  };

  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};

export default StudentProvider;
