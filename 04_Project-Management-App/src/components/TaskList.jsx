import { Droppable } from "@hello-pangea/dnd";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BoardContext, ListContext, TaskContext } from "../contexts";
import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import TaskCard from "./TaskCard";

const TaskList = ({ list }) => {
  const [editMode, setEditMode] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const { boardId } = useParams();

  const { dispatchBoardActions } = useContext(BoardContext);
  const { dispatchListActions } = useContext(ListContext);
  const { tasks, dispatchTaskActions } = useContext(TaskContext);

  const listTasks = tasks.filter((task) => task.listId === list.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;

    const taskId = Date.now() + "";

    dispatchTaskActions({
      type: "CREATE_TASK",
      payload: {
        id: taskId,
        title: taskTitle,
        listId: list.id,
        boardId: boardId,
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
        id: boardId,
        taskId: taskId,
      },
    });

    setTaskTitle("");
    setEditMode(false);
  };

  const handleRemoveList = () => {
    listTasks.forEach((task) => {
      dispatchTaskActions({
        type: "REMOVE_TASK",
        payload: task.id,
      });

      dispatchBoardActions({
        type: "REMOVE_TASK_ID_TO_BOARD",
        payload: {
          id: boardId,
          taskId: task.id,
        },
      });
    });

    dispatchListActions({
      type: "REMOVE_LIST",
      payload: list.id,
    });

    dispatchBoardActions({
      type: "REMOVE_LIST_ID_TO_BOARD",
      payload: {
        id: boardId,
        listId: list.id,
      },
    });
  };

  return (
    <div className="list">
      <div className="list-header">
        <h3 className="list-title">{list.title}</h3>
        <button className="list-remove-btn" onClick={handleRemoveList}>
          ×
        </button>
      </div>

      <Droppable droppableId={String(list.id)}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list"
          >
            {listTasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {editMode ? (
        <AddItemForm
          listForm={false}
          title={taskTitle}
          handleSubmit={handleSubmit}
          handleOnChange={(e) => setTaskTitle(e.target.value)}
          setEditMode={setEditMode}
        />
      ) : (
        <AddItem taskAddItem={true} setEditMode={setEditMode} />
      )}
    </div>
  );
};

export default TaskList;