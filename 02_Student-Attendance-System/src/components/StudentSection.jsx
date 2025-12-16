import { AbsentStudentList, AllStudentList, PresentsStudentList } from ".";

const StudentSection = () => {
  // handler functions
  return (
    <div className="student-section">
      <AllStudentList />
      <PresentsStudentList />
      <AbsentStudentList />
    </div>
  );
};

export default StudentSection;
