import { useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BoardContext, ListContext, TaskContext } from "../contexts";
import { AddItemForm } from "./";

const TaskCard = ({ task, index }) => {
  const [editMode, setEditMode] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);
  const { dispatchBoardActions } = useContext(BoardContext);
  const { dispatchTaskActions } = useContext(TaskContext);
  const { dispatchListActions } = useContext(ListContext);

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatchTaskActions({
      type: "REMOVE_TASK",
      payload: task.id,
    });
    dispatchListActions({
      type: "REMOVE_TASK_ID_TO_LIST",
      payload: {
        id: task.listId,
        taskId: task.id,
      },
    });
    dispatchBoardActions({
      type: "REMOVE_TASK_ID_TO_BOARD",
      payload: {
        id: task.boardId,
        taskId: task.id,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") {
      return;
    }
    dispatchTaskActions({
      type: "UPDATE_TASK_TITLE",
      payload: {
        id: task.id,
        title: taskTitle,
      },
    });
    setEditMode(false);
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {editMode ? (
            <AddItemForm
              title={taskTitle}
              setEditMode={setEditMode}
              listForm={false}
              handleSubmit={handleSubmit}
              handleOnChange={(e) => {
                setTaskTitle(e.target.value);
              }}
            />
          ) : (
            <div className="taskCard" onClick={() => setEditMode(true)}>
              <p>{task.title}</p>
              <p onClick={handleRemove}>×</p>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
