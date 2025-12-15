import "../App.css";

const StudentAddForm = (props) => {
  // props
  const {
    editMode,
    setEditMode,
    students,
    setStudents,
    editableStudent,
    setEditableStudent,
    studentName,
    setStudentName,
  } = props;

  // handler functions
  const handleNameChange = (e) => setStudentName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim() === "") {
      return alert("Please provide a valid name");
    }

    editMode ? handleUpdate() : handleCreate();
  };
  const handleCreate = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };

    setStudents([...students, newStudent]);
    setStudentName("");
  };
  const handleUpdate = () => {
    const updatedStudents = students.map((item) => {
      if (item.id === editableStudent.id) {
        return { ...item, name: studentName };
      }
      return item;
    });
    setStudents(updatedStudents);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a student name"
          value={studentName}
          onChange={handleNameChange}
        />
        <button type="submit">
          {editMode ? "Update name" : "Add student"}
        </button>
      </form>
    </>
  );
};

export default StudentAddForm;
