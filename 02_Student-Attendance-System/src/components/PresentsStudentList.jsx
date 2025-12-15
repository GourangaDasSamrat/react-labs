import "../App.css";

const PresentsStudentList = (props) => {
  // props
  const { students, handleAccidentallyAdded  } = props;

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
