import { useContext, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Link, useParams } from "react-router-dom";
import { AddItem, AddItemForm, TaskList } from "../components";
import { BoardContext, ListContext, TaskContext } from "../contexts";

const BoardsDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const { dispatchBoardActions } = useContext(BoardContext);
  const { lists, dispatchListActions } = useContext(ListContext);
  const { dispatchTaskActions } = useContext(TaskContext);
  const { boardId } = useParams();

  const renderedList = lists.filter((item) => item.boardId === boardId);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now() + "";

    dispatchListActions({
      type: "CREATE_LIST",
      payload: {
        id: id,
        title: listTitle,
        boardId: boardId,
      },
    });

    dispatchBoardActions({
      type: "ADD_LIST_ID_TO_BOARD",
      payload: {
        id: boardId,
        listId: id,
      },
    });

    setEditMode(false);
    setListTitle("");
  };
  const handleDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      dispatchTaskActions({
        type: "CHANGE_LIST_ID_TO_TASK",
        payload: {
          id: draggableId,
          listId: destination.droppableId,
        },
      });
    }

    dispatchListActions({
      type: "SORT_TASK_ID_TO_LIST",
      payload: {
        draggableId,
        source,
        destination,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="details">
        <div className="details-header">
          <Link to="/">← Back to boards</Link>
        </div>
        <div className="details-content">
          {renderedList.map((list) => (
            <TaskList key={list.id} list={list} />
          ))}
          {editMode ? (
            <AddItemForm
              listForm={true}
              title={listTitle}
              handleSubmit={handleSubmit}
              handleOnChange={(e) => setListTitle(e.target.value)}
              setEditMode={setEditMode}
            />
          ) : (
            <AddItem listAddItem={true} setEditMode={setEditMode} />
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default BoardsDetails;
