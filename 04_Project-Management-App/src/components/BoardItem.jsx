import { useContext } from "react";
import { BoardContext } from "../contexts";

const BoardItem = ({ board }) => {
  const { dispatchBoardActions } = useContext(BoardContext);

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatchBoardActions({
      type: "REMOVE_BOARD",
      payload: board.id,
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
