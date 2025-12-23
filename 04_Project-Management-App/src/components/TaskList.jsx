import { useContext, useState } from "react";
import { BoardContext, ListContext, TaskContext } from "../contexts";
import { AddItem, AddItemForm } from "./";

const TaskList = ({ list }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { tasks, dispatchTaskActions } = useContext(TaskContext);
  const { dispatchListActions } = useContext(ListContext);
  const { dispatchBoardActions } = useContext(BoardContext);

  const handleRemove = () => {
    dispatchListActions({
      type: "REMOVE_LIST",
      payload: list.id,
    });
    list.tasks.forEach((taskId) => {
      dispatchTaskActions({
        type: "REMOVE_TASK",
        payload: taskId,
      });
      dispatchBoardActions({
        type: "REMOVE_TASK_ID_TO_BOARD",
        payload: {
          id: list.boardId,
          taskId: taskId,
        },
      });
    });
    dispatchBoardActions({
      type: "REMOVE_LIST_ID_TO_BOARD",
      payload: {
        id: list.boardId,
        listId: list.id,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      // ✅ Added validation
      return;
    }
    const taskId = Date.now() + "";
    dispatchTaskActions({
      type: "CREATE_TASK",
      payload: {
        id: taskId,
        title: taskTitle,
        listId: list.id,
        boardId: list.boardId,
      },
    });
    dispatchListActions({
      type: "ADD_TASK_ID_TO_LIST",
      payload: {
        id: list.id,
        taskId: taskId,
      },
    });
    dispatchBoardActions({
      type: "ADD_TASK_ID_TO_BOARD",
      payload: {
        id: list.boardId,
        taskId: taskId,
      },
    });
    setTaskTitle("");
    setEditMode(false);
  };

return (
  <div className="list-container">
    <div>
      <div className="list-header">
        <h5>{list.title}</h5>
        <p className="list-remove-btn" onClick={handleRemove}>×</p>
      </div>
      {list.tasks
        .map((item) => tasks.find((el) => el.id === item))
        .filter(Boolean)
        .map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      {editMode ? (
        <AddItemForm
          title={taskTitle}
          handleOnChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          setEditMode={setEditMode}
          handleSubmit={handleSubmit}
        />
      ) : (
        <AddItem listAddItem={false} setEditMode={setEditMode} />
      )}
    </div>
  </div>
);
};

export default TaskList;
