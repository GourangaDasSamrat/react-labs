import { useContext } from "react";
import "../App.css";
import { StudentCtx } from "../contexts/StudentContext";

const AllStudentList = () => {
  // props
  const { studentStates, dispatch, handleMakePresent, handleMakeAbsent } =
    useContext(StudentCtx);

  // handler functions

  return (
    <>
      <div className="all-students">
        <h2>All Students</h2>
        <ul>
          {studentStates.students.map((student) => (
            <li key={student.id}>
              <>
                {student.name}
                <div className="button-row">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "edit_student",
                        payload: student,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "remove_student",
                        payload: student.id,
                      })
                    }
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMakePresent(student)}
                  >
                    Make present
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMakeAbsent(student)}
                  >
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
