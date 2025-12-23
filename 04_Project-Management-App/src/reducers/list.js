export const listReducer = (lists = [], action) => {
  switch (action.type) {
    case "CREATE_LIST": {
      const newList = {
        id: action.payload.id,
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      };
      return [...lists, newList];
    }
    case "UPDATE_LIST_NAME": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "CHANGE_BOARD_ID": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            boardId: action.payload.boardId,
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "REMOVE_LIST": {
      return lists.filter((item) => item.id !== action.payload);
    }
    case "ADD_TASK_ID_TO_LIST": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: [...item.tasks, action.payload.taskId],
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "REMOVE_TASK_ID_TO_LIST": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: item.tasks.filter(
              (taskId) => taskId !== action.payload.taskId
            ),
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "SORT_TASK_ID_TO_LIST": {
      const { draggableId, source, destination } = action.payload;
      const updatedLists = lists.map((list) => {
        if (
          source.droppableId === destination.droppableId &&
          list.id === source.droppableId
        ) {
          const copyOfTasks = [...list.tasks];
          copyOfTasks.splice(source.index, 1);
          copyOfTasks.splice(destination.index, 0, draggableId);
          return {
            ...list,
            tasks: copyOfTasks,
          };
        }

        if (source.droppableId === list.id) {
          return {
            ...list,
            tasks: list.tasks.filter((taskId) => taskId !== draggableId),
          };
        }

        if (destination.droppableId === list.id) {
          return {
            ...list,
            tasks: [
              ...list.tasks.slice(0, destination.index),
              draggableId,
              ...list.tasks.slice(destination.index),
            ],
          };
        }

        return list;
      });

      return updatedLists;
    }
    default:
      return lists;
  }
};
