import { useContext } from "react";
import "../App.css";
import { StudentCtx } from "../contexts/StudentContext";

const PresentsStudentList = () => {
  // props
  const { students, handleAccidentallyAdded  } = useContext(StudentCtx);

  // derived state
  const presentStudentList = students.filter((item) => item.isPresent === true);

  return (
    <>
      <div className="present-students">
        <h2>Present Students</h2>
        <ul>
          {presentStudentList.map((student) => (
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

export default PresentsStudentList;
