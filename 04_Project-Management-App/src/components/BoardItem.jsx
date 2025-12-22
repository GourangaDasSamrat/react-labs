import { useContext } from "react";
import { BoardContext, ListContext, TaskContext } from "../contexts";

const BoardItem = ({ board }) => {
  const { dispatchBoardActions } = useContext(BoardContext);
  const { dispatchListActions } = useContext(ListContext);
  const { dispatchTaskActions } = useContext(TaskContext);

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchBoardActions({
      type: "REMOVE_BOARD",
      payload: board.id,
    });

    board.lists.forEach((listId) => {
      dispatchListActions({
        type: "REMOVE_LIST",
        payload: listId,
      });
    });
    board.task.forEach((taskId) => {
      dispatchTaskActions({
        type: "REMOVE_TASK",
        payload: taskId,
      });
    });
  };

  return (
    <div className="board-item">
      <h5>{board.title}</h5>
      <p className="board-item-remove" onClick={handleRemove}>
        x
      </p>
    </div>
  );
};

export default BoardItem;
