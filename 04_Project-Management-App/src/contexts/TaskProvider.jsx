import { useReducer } from "react";
import { taskReducer } from "../reducers/task";
import { TaskContext } from "./TaskContext";

const TaskProvider = ({children}) => {

  // states
  const [tasks,dispatchTaskActions] = useReducer(taskReducer, []);


  return <TaskContext.Provider value={{tasks,dispatchTaskActions}}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
