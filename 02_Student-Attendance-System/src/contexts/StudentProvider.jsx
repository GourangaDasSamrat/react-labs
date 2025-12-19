import { useReducer } from "react";
import { StudentCtx } from "./StudentContext";

// initial state
const initState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

// reducers
const studentReducer = (state, action) => {
  switch (action.type) {
    case "change_student_name":
      return {
        ...state,
        studentName: action.payload,
      };
    case "create_student": {
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "",
      };
    }
    case "edit_student":
      return {
        ...state,
        editMode: true,
        editableStudent: action.payload,
        studentName: action.payload.name,
      };
    case "update_student":
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === state.editableStudent.id) {
            return { ...item, name: state.studentName };
          }
          return item;
        }),
        editMode: false,
        editableStudent: null,
      };
    case "remove_student":
      return {
        ...state,
        student: state.student.filter(
          (student) => student.id !== action.payload
        ),
      };
    case "change_isPresent_status":
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, isPresent: action.payload.isPresent };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

const StudentProvider = (props) => {
  // props

  const { children } = props;
  const [studentStates, dispatch] = useReducer(studentReducer, initState);

  // handler functions

  const handleCreate = (e) =>
    dispatch({ type: "change_student_name", payload: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentStates.studentName.trim() === "") {
      return alert("Please provide a valid name");
    }

    studentStates.editMode
      ? dispatch({ type: "update_student" })
      : dispatch({ type: "create_student" });
  };

  const handleAccidentallyAdded = (student) => {
    dispatch({
      type: "change_isPresent_status",
      payload: {
        id: student.id,
        isPresent: !student.isPresent,
      },
    });
  };

  const handleMakePresent = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${
          student.isPresent === true ? "Present" : "Absent"
        } list`
      );
    }
    dispatch({
      type: "change_isPresent_status",
      payload: {
        id: student.id,
        isPresent: true,
      },
    });
  };

  const handleMakeAbsent = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `This student is already in the ${
          student.isPresent === true ? "Present" : "Absent"
        } list`
      );
    }

    dispatch({
      type: "change_isPresent_status",
      payload: {
        id: student.id,
        isPresent: false,
      },
    });
  };

  const ctxValue = {
    handleMakePresent,
    handleMakeAbsent,
    handleNameChange: handleCreate,
    handleSubmit,
    handleAccidentallyAdded,
    studentStates,
    dispatch,
  };

  return <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>;
};

export default StudentProvider;
