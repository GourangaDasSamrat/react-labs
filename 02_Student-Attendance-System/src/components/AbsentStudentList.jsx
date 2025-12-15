import "../App.css";

const AbsentStudentList = (props) => {
  // props
  const { students, handleAccidentallyAdded } = props;

  return (
    <>
      <div className="absent-students">
        <h2>Absent Students</h2>
        <ul>
          {students
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
