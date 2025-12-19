import { useContext } from "react";
import "../App.css";
import { StudentCtx } from "../contexts/StudentContext";

const AbsentStudentList = () => {
  // props
  const { studentStates, handleAccidentallyAdded } = useContext(StudentCtx);

  return (
    <>
      <div className="absent-students">
        <h2>Absent Students</h2>
        <ul>
          {studentStates.students
            .filter((item) => item.isPresent === false)
            .map((student) => (
              <li key={student.id}>
                <>{student.name}</>
                <button
                  type="button"
                  onClick={() => handleAccidentallyAdded(student)}
                >
                  Accidentally added
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default AbsentStudentList;
