import { AbsentStudentList, AllStudentList, PresentsStudentList } from ".";

const StudentSection = (props) => {
  // props
  const {
    students,
    setStudents,
    setEditMode,
    setEditableStudent,
    setStudentName,
  } = props;

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
  return (
    <div className="student-section">
      <AllStudentList
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
        setStudentName={setStudentName}
      />
      <PresentsStudentList
        students={students}
        handleAccidentallyAdded={handleAccidentallyAdded}
      />
      <AbsentStudentList
        students={students}
        handleAccidentallyAdded={handleAccidentallyAdded}
      />
    </div>
  );
};

export default StudentSection;
