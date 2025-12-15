import "../App.css";

const AllStudentList = (props) => {
  // props
  const {
    students,
    setStudents,
    setEditMode,
    setEditableStudent,
    setStudentName,
  } = props;

  // handler functions
  const handleEdit = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };
  const handleRemove = (studentId) => {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  };
  const handleMakePresent = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${
          student.isPresent === true ? "Present" : "Absent"
        } list`
      );
    }

    const updatedStudents = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: true,
        };
      }
      return item;
    });

    setStudents(updatedStudents);
  };
  const handleMakeAbsent = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${
          student.isPresent === true ? "Present" : "Absent"
        } list`
      );
    }

    const updatedStudents = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: false,
        };
      }
      return item;
    });

    setStudents(updatedStudents);
  };

  return (
    <>
      <div className="all-students">
        <h2>All Students</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <>
                {student.name}
             <div className="button-row">
             <button type="button" onClick={() => handleEdit(student)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleRemove(student.id)}>
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => handleMakePresent(student)}
                >
                  Make present
                </button>
                <button type="button" onClick={() => handleMakeAbsent(student)}>
                  Make absent
                </button>
             </div>
              </>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllStudentList;
