import { Draggable } from "@hello-pangea/dnd";

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="task-card"
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
