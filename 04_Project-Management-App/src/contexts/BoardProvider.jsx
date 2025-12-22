import { useReducer } from "react";
import { boardReducer } from "../reducers/board";
import { BoardContext } from "./BoardContext";

const BoardProvider = ({children}) => {

  // states
  const [boards, dispatchBoardActions] = useReducer(boardReducer, []);

  return (
    <BoardContext.Provider value={{ boards, dispatchBoardActions }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
