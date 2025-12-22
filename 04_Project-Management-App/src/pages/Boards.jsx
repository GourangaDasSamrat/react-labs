import { BoardCreatingForm, BoardList } from "../components";

const Boards = () => {
  return (
    <div className="boards-container">
      <BoardCreatingForm />
      <BoardList />
    </div>
  );
};

export default Boards;
