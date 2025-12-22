import { useContext, useState } from "react";
import { BoardContext } from "../contexts";

const BoardCreatingForm = () => {
  // states
  const [boardTitle, setBoardTitle] = useState("");

  // use context
  const {dispatchBoardActions} = useContext(BoardContext);

  // handler functions
  const handleAddBoard = (e) => {
    e.preventDefault();
    if (boardTitle.trim() === "") {
      return alert("Please enter a valid board title");
    }
    dispatchBoardActions({
      type: "CREATE_BOARD",
      payload: boardTitle,
    });
    setBoardTitle("");
  };

  return (
    <div>
      <form onSubmit={handleAddBoard}>
        <input
          type="text"
          placeholder="Write your board title here..."
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
        />
        <button type="submit">Create board</button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
