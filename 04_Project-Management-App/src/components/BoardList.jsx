import { useContext } from "react";
import { Link } from "react-router-dom";
import { BoardContext } from "../contexts";
import { BoardItem } from "./";

const BoardList = () => {
  const { boards } = useContext(BoardContext);

  return (
    <div className="board-list">
      {boards.map((board) => (
        <Link key={board.id} to={`/boards/${board.id}`}>
          <BoardItem board={board} />
        </Link>
      ))}
    </div>
  );
};

export default BoardList;
