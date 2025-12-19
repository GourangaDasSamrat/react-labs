import { useContext } from "react";
import "../App.css";
import { StudentCtx } from "../contexts/StudentContext";

const StudentAddForm = () => {
  // props
  const { handleSubmit, handleNameChange, studentStates } =
    useContext(StudentCtx);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a student name"
          value={studentStates.studentName}
          onChange={handleNameChange}
        />
        <button type="submit">
          {studentStates.editMode ? "Update name" : "Add student"}
        </button>
      </form>
    </>
  );
};

export default StudentAddForm;
